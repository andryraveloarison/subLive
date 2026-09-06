-- ─────────────────────────────────────────────────────────────────────────
-- Table des avis / commentaires des joueurs (Dashikara)
-- Une ligne = un avis laissé depuis le menu du jeu. Affiché dans /datax.
--
-- A executer dans Supabase -> SQL Editor (idempotent : re-executable sans risque).
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists public.dashikara_reviews (
  id         bigint generated always as identity primary key,
  pseudo     text        not null default '',
  device     text        not null default '',
  rating     smallint,                                  -- note 1..5 (facultative)
  message    text        not null,
  created_at timestamptz not null default now()
);

create index if not exists dashikara_reviews_created_at_idx
  on public.dashikara_reviews (created_at);

-- RLS : le jeu tourne avec la cle publishable (role anon). On autorise
-- l'insertion (laisser un avis) et la lecture (tableau de bord /datax).
alter table public.dashikara_reviews enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'dashikara_reviews'
      and policyname = 'dashikara_reviews_insert_anon'
  ) then
    create policy dashikara_reviews_insert_anon on public.dashikara_reviews
      for insert to anon, authenticated
      with check (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'dashikara_reviews'
      and policyname = 'dashikara_reviews_select_anon'
  ) then
    create policy dashikara_reviews_select_anon on public.dashikara_reviews
      for select to anon, authenticated
      using (true);
  end if;
end $$;
