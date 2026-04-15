export async function GET() {
  try {
    const [price, mcap, supply] = await Promise.all([
      fetch("https://explorer.dorkcoin.org/api/v1/lastprice"),
      fetch("https://explorer.dorkcoin.org/api/v1/marketcap"),
      fetch("https://explorer.dorkcoin.org/api/v1/coinsupply"),
    ]);

    const [p, m, s] = await Promise.all([
      price.text(),
      mcap.text(),
      supply.text(),
    ]);

    return Response.json({
      price: Number(p.trim()),
      marketcap: Number(m.trim()),
      supply: Number(s.trim()),
    });

  } catch (err) {
    return Response.json(
      { error: "Failed to fetch market data" },
      { status: 500 }
    );
  }
}