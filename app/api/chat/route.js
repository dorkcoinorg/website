// API route for OpenRouter AI chat
// Import dorkipedia content
const dorkipediaContent = [
  {
    id: "intro",
    section: "Introduction",
    topics: [
      {
        title: "What is Dorkcoin?",
        content:
          "Dorkcoin is a community-first Proof-of-Stake memecoin designed for internet creators and collectors who embrace the dorky side of crypto. It uses proven PoS technology that's been securing networks since the early days of blockchain.",
      },
      {
        title: "What makes Dorkcoin different?",
        content:
          "Dorkcoin focuses on community storytelling, low friction staking, and a playful culture anchored by open participation. As a PoS coin, it eliminates mining pools, reduces energy consumption, and gives every holder the ability to earn rewards.",
      },
    ],
  },
  {
    id: "getting-started",
    section: "Getting Started",
    topics: [
      {
        title: "How do I stake DORK?",
        content:
          "Download Dork Core, deposit DORK into your wallet, keep it online and unlocked, and staking rewards begin automatically. No special hardware or pools required—just hold and earn.",
      },
      {
        title: "Where can I buy DORK?",
        content:
          "Dorkcoin trades on supported exchanges and through community wallets. Check the DORKY EXCHANGES section for live links to purchase DORK.",
      },
      {
        title: "What wallet software should I use?",
        content:
          "Dork Core is the official wallet optimized for staking. Other wallets supporting Dorkcoin may work, but Dork Core is recommended for the best staking experience, security, and full node support.",
      },
    ],
  },
  {
    id: "staking-guide",
    section: "Staking & Rewards",
    topics: [
      {
        title: "What is Proof of Stake (PoS)?",
        content:
          "PoS replaces energy-intensive mining with a system where coin holders validate transactions. Instead of expensive hardware races, you stake your DORK in your wallet to participate and earn rewards. It's more efficient, democratic, and environmentally friendly than Proof of Work.",
      },
      {
        title: "How much can I earn staking DORK?",
        content:
          "Staking rewards are 100 DORK per block. Blocks are created approximately every 60 seconds, generating ~1,440 blocks daily. Your actual earnings depend on your stake weight relative to total network weight.",
      },
      {
        title: "What's the minimum amount of DORK needed to stake?",
        content:
          "There is no hard minimum, but coins must reach 100 block confirmations before becoming eligible for staking. You need sufficient stake weight to be selected reasonably frequently. Starting with at least 25,000 DORK is recommended to see regular rewards; larger amounts increase selection frequency proportionally.",
      },
      {
        title: "How often do I receive staking rewards?",
        content:
          "Dorkcoin targets ~60-second block times, creating approximately 1,440 blocks per day. Your rewards are minted when your staked coins are selected to validate the next block based on your stake weight and age. Most active stakers receive rewards within 24 hours, with more frequent payouts as stake weight increases.",
      },
      {
        title: "What is stake age and why does it matter?",
        content:
          "Stake age is how long your coins have been continuously held, unlocked, and online in your wallet. Older stakes receive higher weight in block selection, dramatically increasing your probability of being chosen to mint a block and earn rewards. Maximum weight is typically achieved after 30 days of continuous staking. Spending coins resets stake age for those outputs.",
      },
      {
        title: "Do I need to keep my wallet online 24/7?",
        content:
          "Yes, your wallet must be online and unlocked to actively stake and earn rewards. However, your DORK remains secure in your control. Consider running Dork Core on a low-power device or VPS to maintain continuous participation.",
      },
    ],
  },
  {
    id: "technical",
    section: "Technical Details",
    topics: [
      {
        title: "Why is Dorkcoin Proof of Stake better than Proof of Work?",
        content:
          "PoS uses 99% less energy than PoW, requires no expensive mining equipment, eliminates mining pools and centralization, and lets anyone with DORK participate equally. You earn rewards for supporting the network instead of racing to solve complex puzzles.",
      },
      {
        title: "How does Dorkcoin prevent double-spending without miners?",
        content:
          "Dorkcoin uses cryptographic validation and consensus among stakers to verify transactions. Coins staked as validators are at risk if they attempt fraud, creating economic incentives for honest participation. The blockchain ensures all transactions are immutable and public.",
      },
      {
        title: "What is the total supply of DORK?",
        content:
          "Dorkcoin has a capped supply designed to prevent inflation. The exact cap maintains scarcity while ensuring enough coins circulate for the economy. This differs from fiat currency and even some cryptocurrencies with unlimited supplies.",
      },
      {
        title: "Are there transaction fees for staking?",
        content:
          "Staking itself is free—there are no fees to participate. When your coins are selected to mint a block, a minimal transaction fee is included in that block. Stakers who successfully mint blocks earn transaction fees from all included transactions as part of their block reward, creating additional income beyond the base 100 DORK block subsidy.",
      },
      {
        title: "Is my DORK locked up when I stake?",
        content:
          "Your DORK is not permanently locked during staking. You can send coins out of your staking wallet at any time, but doing so resets the stake age for those outputs, requiring another 100 block confirmations before they can stake again. Your coins remain fully under your control.",
      },
    ],
  },
  {
    id: "security",
    section: "Security & Safety",
    topics: [
      {
        title: "Is Dorkcoin secure?",
        content:
          "Yes. Dorkcoin uses proven cryptography and benefits from a well-established PoS protocol. Proof of Stake has secured billions in value across multiple networks since 2014. Your coins are only at risk if someone gains access to your private keys.",
      },
      {
        title: "Can Dorkcoin be hacked?",
        content:
          "Dorkcoin's blockchain is cryptographically secured and distributed across thousands of independent nodes. Changing past transactions would require controlling the majority of staked coins simultaneously—economically irrational for attackers. The consensus model provides strong security.",
      },
      {
        title: "Can I lose my DORK while staking?",
        content:
          "Your DORK cannot be lost while staking. Proof of Stake doesn't require you to risk your coins—you maintain full control. The only way to lose DORK is through deliberate transfer or theft of your private keys.",
      },
      {
        title: "How do I backup my Dorkcoin wallet?",
        content:
          "Backup your wallet.dat file or seed phrase in a secure location. Your seed phrase allows recovery of your coins on any device. Never share this with anyone. Store backups offline or in encrypted cloud storage.",
      },
      {
        title: "What happens if my wallet goes offline?",
        content:
          "If your wallet is offline, you won't mint new blocks or earn rewards during that time. Your DORK is never at risk—it simply won't be actively staking. When you come back online, staking resumes automatically.",
      },
    ],
  },
  {
    id: "specifications",
    section: "Network Specifications",
    topics: [
      {
        title: "What is the block reward?",
        content:
          "Dorkcoin PoS blocks generate 100 DORK per block as the base network subsidy. This subsidy is split between the staker and optionally a development fund based on community parameters. Transaction fees from all included transactions are also rewarded to the block creator.",
      },
      {
        title: "What is the block time?",
        content:
          "Dorkcoin targets approximately 60-second block intervals through difficulty adjustment. This results in ~1,440 blocks created daily and ~525,600 blocks annually, creating a predictable stream of staking opportunities across the network.",
      },
      {
        title: "How many confirmations until coins can stake?",
        content:
          "Coins require 100 block confirmations before becoming eligible for staking. This security measure ensures transaction finality. After 100 blocks (~100 minutes at 60-second average), your coins begin accumulating stake age and can be selected to mint blocks.",
      },
      {
        title: "What is the coinbase maturity?",
        content:
          "Freshly minted DORK from staking rewards must reach 100 block confirmations before they can be spent or restaked. This ensures network security by preventing stake manipulation in the short term.",
      },
    ],
  },
  {
    id: "community",
    section: "Community & Development",
    topics: [
      {
        title: "What is the DORK community roadmap?",
        content:
          "Dorkcoin is developed by its community. Major initiatives include expanding exchange listings, improving wallet interfaces, and growing the staking ecosystem. Check the official GitHub repository and community channels for current development efforts.",
      },
    ],
  },
];

// Build knowledge base from dorkipedia content
function buildKnowledgeBase() {
  let knowledgeBase = "# Dorkcoin Dorkipedia Knowledge Base\n\n";
  dorkipediaContent.forEach((section) => {
    knowledgeBase += `## ${section.section}\n\n`;
    section.topics.forEach((topic) => {
      knowledgeBase += `### ${topic.title}\n${topic.content}\n\n`;
    });
  });
  return knowledgeBase;
}

export async function POST(request) {
  try {
    const { message, history } = await request.json();

    if (!process.env.NEXT_PUBLIC_OPENROUTER_API_KEY) {
      return new Response(
        JSON.stringify({ error: "OpenRouter API key not configured" }),
        { status: 500 }
      );
    }

    const knowledgeBase = buildKnowledgeBase();

    // Call OpenRouter API with dorkipedia as the knowledge base
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "Accept": "application/json",
        "HTTP-Referer": `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}`,
        "X-OpenRouter-Title": "Dorkcoin Dorkipedia AI Chat",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a helpful AI assistant for Dorkcoin. You answer questions ONLY based on the provided Dorkipedia knowledge base. Do not draw information from the internet or general knowledge. If a question cannot be answered using the knowledge base provided, say "I don't have information about that in the Dorkipedia documentation. Please check the official Dorkcoin resources or community channels."

KNOWLEDGE BASE:
${knowledgeBase}

Be friendly, concise, and accurate. Always cite which section of the Dorkipedia you're referencing when helpful.`,
          },
          ...history,
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 512,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return new Response(
        JSON.stringify({ error: "Failed to get response from OpenRouter", details: error }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new Response(
      JSON.stringify({
        reply: data.choices[0].message.content,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
