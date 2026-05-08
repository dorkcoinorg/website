export async function GET() {
  try {
    const [priceRes, marketCapRes, emission24hRes, supplyRes] =
      await Promise.all([
        fetch("https://explorer.dorkcoin.org/api/v1/lastprice"),
        fetch("https://explorer.dorkcoin.org/api/v1/marketcap"),
        fetch("https://explorer.dorkcoin.org/api/v1/emission24h"),
        fetch("https://explorer.dorkcoin.org/api/v1/coinsupply"),
      ]);

    const [price, marketCap, emission24h, coinSupply] =
      await Promise.all([
        priceRes.text(),
        marketCapRes.text(),
        emission24hRes.text(),
        supplyRes.text(),
      ]);

    return Response.json({
      price,
      marketCap,
      emission24h,
      coinSupply,
    });
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}