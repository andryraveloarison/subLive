-- ─────────────────────────────────────────────────────────────────────────
-- Table des parties jouées (Kilalao)
-- Une ligne = une partie lancée par un joueur, tous jeux confondus.
-- Sert a : « jeu le plus joue », « X parties aujourd'hui » et les courbes
-- d'activite par joueur (par semaine / par mois) sur la page /datax.
--
-- A executer dans Supabase -> SQL Editor (idempotent : re-executable sans risque).
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists public.game_plays (
  id        bigint generated always as identity primary key,
  game      text        not null,
  pseudo    text        not null default '',
  device    text        not null default '',
  played_at timestamptz not null default now()
);

create index if not exists game_plays_game_idx      on public.game_plays (game);
create index if not exists game_plays_played_at_idx on public.game_plays (played_at);
create index if not exists game_plays_device_idx    on public.game_plays (device);

-- RLS : le jeu tourne avec la cle publishable (role anon). On autorise
-- l'insertion (log d'une partie) et la lecture (tableaux de bord /datax).
alter table public.game_plays enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'game_plays'
      and policyname = 'game_plays_insert_anon'
  ) then
    create policy game_plays_insert_anon on public.game_plays
      for insert to anon, authenticated
      with check (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'game_plays'
      and policyname = 'game_plays_select_anon'
  ) then
    create policy game_plays_select_anon on public.game_plays
      for select to anon, authenticated
      using (true);
  end if;
end $$;
