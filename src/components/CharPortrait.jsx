// Portrait CSS chibi (tête, casquette, yeux rouges, torse, jambes, chaussures).
// `size` sert d'échelle globale via le ratio r.
export default function CharPortrait({ char, size = 90 }) {
  const c = char.colors
  const r = size / 90
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      {/* Pics de cheveux */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: r * 2.5, marginBottom: r * -5 }}>
        {[[0.62, 10], [0.82, 5], [1, 0], [0.82, -5], [0.62, -10]].map(([h, rot], i) => (
          <div key={i} style={{
            width: r * 8, height: r * 14 * h,
            background: c.cap,
            borderRadius: `${r * 3}px ${r * 3}px 0 0`,
            transform: `rotate(${rot}deg)`,
            transformOrigin: 'bottom center',
            boxShadow: `0 0 ${r * 7}px ${c.cap}70`,
          }} />
        ))}
      </div>
      {/* Tête */}
      <div style={{
        width: r * 58, height: r * 53,
        borderRadius: `${r * 32}px ${r * 32}px ${r * 20}px ${r * 20}px`,
        background: c.skin,
        position: 'relative',
        boxShadow: `0 ${r * 5}px ${r * 14}px rgba(0,0,0,0.5)`,
        zIndex: 1,
      }}>
        {/* Casquette */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '38%',
          background: c.cap,
          borderRadius: `${r * 32}px ${r * 32}px 2px 2px`,
        }} />
        {/* Visière */}
        <div style={{
          position: 'absolute', top: '33%', left: '50%', transform: 'translateX(-50%)',
          width: '68%', height: '11%', background: c.cap, borderRadius: '0 0 4px 4px',
        }} />
        {/* Sourcils agressifs */}
        <div style={{
          position: 'absolute', top: '46%', left: 0, right: 0,
          display: 'flex', justifyContent: 'space-evenly', padding: `0 ${r * 5}px`,
        }}>
          {[1, -1].map((d, i) => (
            <div key={i} style={{
              width: r * 13, height: r * 3.5,
              background: 'rgba(10,0,0,0.8)', borderRadius: r * 2,
              transform: `rotate(${d * -14}deg)`,
            }} />
          ))}
        </div>
        {/* Yeux rouges lumineux */}
        <div style={{
          position: 'absolute', top: '54%', left: 0, right: 0,
          display: 'flex', justifyContent: 'space-evenly', padding: `0 ${r * 7}px`,
        }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              width: r * 10, height: r * 9,
              borderRadius: `${r * 2}px ${r * 2}px ${r * 4}px ${r * 4}px`,
              background: 'linear-gradient(180deg, #ff3333, #990000)',
              boxShadow: `0 0 ${r * 7}px #ff0000bb`,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '12%', left: '14%',
                width: '24%', height: '24%', borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
              }} />
            </div>
          ))}
        </div>
      </div>
      {/* Torse */}
      <div style={{
        width: r * 53, height: r * 37,
        background: c.shirt,
        borderRadius: `3px 3px ${r * 7}px ${r * 7}px`,
        position: 'relative', zIndex: 1,
        boxShadow: `0 ${r * 4}px ${r * 12}px rgba(0,0,0,0.4)`,
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '22%', height: '100%', background: 'rgba(0,0,0,0.25)',
        }} />
        {/* Bras gauche */}
        <div style={{
          position: 'absolute', left: r * -13, top: '6%',
          width: r * 13, height: r * 30,
          background: c.shirt, borderRadius: r * 4,
          transform: 'rotate(-7deg)', transformOrigin: 'top center',
        }} />
        {/* Bras droit */}
        <div style={{
          position: 'absolute', right: r * -13, top: '6%',
          width: r * 13, height: r * 30,
          background: c.shirt, borderRadius: r * 4,
          transform: 'rotate(7deg)', transformOrigin: 'top center',
        }} />
      </div>
      {/* Jambes */}
      <div style={{ display: 'flex', gap: r * 4, zIndex: 1 }}>
        {[0, 1].map(i => (
          <div key={i} style={{
            width: r * 23, height: r * 27,
            background: c.pants, borderRadius: `0 0 ${r * 4}px ${r * 4}px`,
          }} />
        ))}
      </div>
      {/* Chaussures */}
      <div style={{ display: 'flex', gap: r * 4, marginTop: r * -1.5, zIndex: 1 }}>
        <div style={{ width: r * 26, height: r * 8, background: '#1a1a1a', borderRadius: `1px ${r * 4}px ${r * 4}px ${r * 4}px`, boxShadow: `0 ${r * 2}px ${r * 6}px rgba(0,0,0,0.7)` }} />
        <div style={{ width: r * 26, height: r * 8, background: '#1a1a1a', borderRadius: `${r * 4}px 1px ${r * 4}px ${r * 4}px`, boxShadow: `0 ${r * 2}px ${r * 6}px rgba(0,0,0,0.7)` }} />
      </div>
    </div>
  )
}
