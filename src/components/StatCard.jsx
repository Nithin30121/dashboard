function formatINR(n) {
  return new Intl.NumberFormat("en-IN").format(Number(n || 0));
}

export default function StatCard({
  theme = "purple",
  name,
  amount,
  abilities,
  image,
  trendText,
  trendType = "up",
}) {
  return (
    <div className={`card card--${theme}`}>
      <div className="cardInner">
        {/* header */}
        <div className="cardHeader">
          <div className="cardName">{name}</div>
          <div className="cardMeta">HP</div>
        </div>

        {/* image area */}
        <div className="imageFrame">
          <div className="imageArea">
            {image ? (
              <img className="cardImage" src={image} alt={`${name}`} />
            ) : (
              <div className="imagePlaceholder">IMAGE AREA</div>
            )}
          </div>
        </div>

        {/* stat */}
        <div className="statLabel">Total Revenue</div>
        <div className="statValue">₹ {formatINR(amount)}</div>

        {/* ✅ bottom separated rounded section */}
        <div className="bottomPanel">
          <div className={`trend trend--${trendType}`}>
            <span className="trendIcon">{trendType === "up" ? "⚡" : "▼"}</span>
            <span>{trendText}</span>
          </div>

          <div className="abilitiesLabel">Abilities</div>
          <div className="abilitiesList">
            {abilities.map((a, i) => (
              <div className="abilityRow" key={i}>
                <span className="dot" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
