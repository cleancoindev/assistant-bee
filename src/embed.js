/* eslint-disable quotes */
function welcomeEmbed() {
  return {
    embed: {
      title: 'Welcome to 1Hive! 🍯',
      description:
        'Please say hi in #:wave:intros to share how you found us and what interests you!',
      color: 16769024,
      fields: [
        {
          name: 'Bot Commands :bee:',
          value: 'Need help? Try `!hny help`'
        },
        {
          name: 'Frequently Asked Questions (FAQ) ❓',
          value: 'https://hackmd.io/ObCMUJUxTumG2z6FJ5cnkg',
        },
        {
          name: 'Get free honey 🤑',
          value: 'https://faucet.1hive.org/',
        },
        {
          name: 'Share your thoughts and feeling on our blog! 💭',
          value: 'https://forum.1hive.org/',
        },
        {
          name: 'Learn more about Honey (HNY) 🍯',
          value: 'https://blog.1hive.org/honey/',
        },
        {
          name: 'Announcements and recaps of all the things 📰',
          value: 'https://1hive.substack.com/ ',
        },
        {
          name: 'Documentation of our DAO 📝',
          value: 'https://about.1hive.org/docs/dao/',
        },
        {
          name: 'Detailed description all of our channels',
          value:
            'https://discordapp.com/channels/698287700834517064/758821739202347038/758886904078008363',
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function brightidWarningEmbed() {
  return {
    embed: {
      title: 'Warning 🚨',
      description:
        'You should not send BrightID connection links on public channels!',
      color: 16769024,
      fields: [
        {
          name: 'Want to get verified?',
          value:
            'The best way is to join a verification party at https://www.brightid.org/meet.',
        },
        {
          name: 'Need more information?',
          value: 'Give the command `!hny brightid` a try!',
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function wrongChannelWarningEmbed() {
  return {
    embed: {
      title: 'Warning 🚨',
      description:
        'Bot commands are only allowed in <#762377613062701146> channel!',
      color: 16769024,
      fields: [
        {
          name: 'Lets keep our discord server clean :)',
          value:
            'We encourage bees to use channels properly, if you ever feel lost check [this at #info](https://discordapp.com/channels/698287700834517064/758821739202347038/758886904078008363).',
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function walletWarningEmbed() {
  return {
    embed: {
      title: 'Warning 🚨',
      description:
        'You are using the `!hny wallet` command incorrectly!',
      color: 16769024,
      fields: [
        {
          name: '`!hny wallet <address>`',
          value:
            'Correct usage of this command requires you to add your xdai wallet address. An example of how to properly use the command is included below!',
        }
      ],
      image: {
        url: 'https://i.imgur.com/E7x8s0j.png',
      },
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function brightidEmbed() {
  return {
    embed: {
      title: 'How to get verified with Bright ID',
      url: 'https://www.brightid.org/',
      color: 16769024,
      author: {
        name: 'Assistant Bee',
        url: 'https://github.com/crisog/assistant-bee',
      },
      description:
        'Here is a step-by-step guide to help you get verified with BrightID.',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      fields: [
        {
          name: '1. Get Verified in the BrightID app',
          value:
            'Getting verified requires you make connections with other trusted users. Given the concept is new and there are not many trusted users, this is currently being done through [Verification parties](https://www.brightid.org/meet "https://www.brightid.org/meet") that are hosted in the BrightID server and require members join a voice/video call.',
        },
        {
          name: '2. Link to a Sponsored App (like 1hive, gitcoin, etc)',
          value:
            'You can link to these [sponsored apps](https://apps.brightid.org/) once you are verified within the app.',
        },
        {
          name: '3. Type the `!verify` command in the designated channel',
          value:
            'In the 1hive server you can type this command in <#762377613062701146>, or you can do this in any public channel in the BrightID discord which [you can access here](https://discord.gg/gH6qAUH).',
        },
        {
          name: "4. Scan the DM'd QR Code",
          value:
            'Open the BrightID app and scan the QR code. Mobile users can click the link that comes with it.',
        },
        {
          name: '5. Type the `!me` command in the designated channel',
          value:
            'Once you have scanned the QR code you can return to the designated channels and type the `!me` command which should grant you the orange verified role.',
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'Embed with thanks to our friends over at https://she.energy/',
      },
    },
  }
}

function helpEmbed() {
  return {
    embed: {
      color: 16769024,
      author: {
        name: 'Assistant Bee',
        url: 'https://github.com/crisog/assistant-bee',
      },
      description:
        "Hi, my name's Assistant Bee, I'm 1hive's helper. All my commands are prefixed by `!hny`. Refer to the list below for my full functionality!",
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      fields: [
        {
          name: 'FAQ',
          value:
            'For a full overview on 1hive, HNY and brightID verification, please check out the [FAQ](https://forum.1hive.org/t/everything-about-1hive-in-one-place-newfaq-in-development/180).',
        },
        {
          name: '!hny address',
          value: "Displays HNY's contract address",
        },
        {
          name: '!hny pollen',
          value:
            '[Pollen](https://about.1hive.org/docs/dao/Participation/pollen/) is a contributor rank used to recognize contributions to the Hive. Refer to the command for more information.',
        },
        {
          name: '!hny save-wallet <address>',
          value: 'This command saves your wallet to a database to be used for pollen payouts.'
        },
        {
          name: '!hny brightid',
          value:
            'Step-by-step guide on how to get verified with [BrightID](https://www.brightid.org)',
        },
        {
          name: '!hny mycred',
          value: 'Shows your total cred and cred earned the past week.',
        },
        {
          name: '!hny price',
          value: 'Show the current price of HNY.',
        },
        {
          name: '!hny metrics',
          value: 'Shows metrics of honeyswap.org (Liquidity, total volume & total fees).',
        },
        {
          name: '!hny official',
          value: 'Shows every official accounts for honey.',
        },
        {
          name: '!hny network',
          value: 'Shows the info about the xDai network.',
        },
      ],
      image: {
        url: 'https://i.imgur.com/E7x8s0j.png',
      },
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}


function helpEmbedES() {
  return {
    embed: {
      color: 16769024,
      author: {
        name: 'Assistant Bee',
        url: 'https://github.com/crisog/assistant-bee',
      },
      description:
        "Hola, me llamo abeja asistente, Soy la ayudante de 1hive's. Todos mis comandos empiezan por `!hny`. En la siguiente lista podrás ver todas mis funcionalidades!",
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      fields: [
        {
          name: 'FAQ',
          value:
            'Para información completa sobre 1hive, HNY y la verificación de brightID, por favor revisa este link [FAQ](https://forum.1hive.org/t/todo-sobre-1hive-en-un-solo-lugar-nuevo-faq-en-desarrolo/272).',
        },
        {
          name: '!hny address',
          value: "Esto muestra la dirección de contrado de HNY",
        },
        {
          name: '!hny pollen',
          value:
            '[Pollen](https://about.1hive.org/docs/dao/Participation/pollen/) es un rango de colaborador que se usa para reconocer las contribuciones a la colmena (Hive). Consulta el comando para obtener más información.',
        },
        {
          name: '!hny brightid',
          value:
            'Guía paso por paso de como verificarte con brightID [BrightID](https://www.brightid.org)',
        },
        {
          name: '!hny mycred',
          value: 'Te muestra el cred total y el cred de la semana pasada que llevas acumulado.',
        },
        {
          name: '!hny price',
          value: 'Muestra el precio actual de HNY.',
        },
        {
          name: '!hny metrics',
          value: 'Muestra las métricas de honeyswap.org (Liquidez, volumen total y comisiones totales).',
        },
        {
          name: '!hny official',
          value: 'Muestra todas las cuentas oficiales de Honey.',
        },
        {
          name: '!hny network',
          value: 'Muestra la información de la red xDai.',
        },
      ],
      image: {
        url: 'https://i.imgur.com/E7x8s0j.png',
      },
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}


function pollenEmbed() {
  return {
    embed: {
      color: 16769024,
      author: {
        name: 'Assistant Bee',
        url: 'https://github.com/crisog/assistant-bee',
      },
      description:
        '[Pollen](https://about.1hive.org/docs/dao/Participation/pollen/) is a contributor rank used to recognize contributions to 1hive’s discord, discourse, and github communities. These contributions are rewarded with weekly distributions of Honey.',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      fields: [
        {
          name: 'Signing up',
          value:
            'To sign up for Pollen, post in the <#708187332154753065> channel with your relevant IDs and a tag to the <#749003215940485180> channel. An example post is included in the image below.',
        },
        {
          name: 'Future of Pollen',
          value:
            'Onboarding is currently done manually, in the future we will attempt to automate this process.',
        },
      ],
      image: {
        url: 'https://i.imgur.com/2OFG47E.png',
      },
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function verifyDiscourseEmbed(verificationCode, discourseUsername) {
  return {
    embed: {
      title: 'Verify discourse account',
      description:
        'Process to verify your account to opt-in for pollen distributions.',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: '1. Change your discourse name',
          value: `Go to your [account preferences](https://forum.1hive.org/u/${discourseUsername}/preferences/account) and after that,
          change your 'Name' field temporarily into this: **${verificationCode}**.`,
        },
        {
          name: '2. Complete the verification',
          value: `Confirm the previous step using the following command:
          **!hny check-discourse ${verificationCode} ${discourseUsername}**`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function successDiscourseVerificationEmbed(discourseUsername) {
  return {
    embed: {
      title: 'Congratulations!',
      description: 'The verification process was completed successfully',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: 'All set!',
          value: `Thanks for verifying your discourse account for pollen distributions, ${discourseUsername}!`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function errorDiscourseVerificationEmbed(errorMessage) {
  return {
    embed: {
      title: 'Bad news!',
      description: 'There was an error in the discourse verification process.',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: 'This is what happened',
          value: `${errorMessage}`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function verifyGithubEmbed(verificationCode, githubUsername) {
  return {
    embed: {
      title: 'Verify github account',
      description:
        'Process to verify your account to opt-in for pollen distributions.',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: '1. Create a public gist',
          value: "Create a public gist called `pollen.md`",
        },
        {
          name: `2. Set code ${verificationCode}`,
          value: 'Place the code in the body of the gist'
        },
        {
          name: '3. Complete the verification',
          value: `Confirm the previous step using the following command:
          **!hny check-github ${verificationCode} ${githubUsername}**`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function successGithubVerificationEmbed(githubUsername) {
  return {
    embed: {
      title: 'Congratulations!',
      description: 'The verification process was completed successfully',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: 'All set!',
          value: `Thanks for verifying your github account for pollen distributions, ${githubUsername}!`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function errorGithubVerificationEmbed(errorMessage) {
  return {
    embed: {
      title: 'Bad news!',
      description: 'There was an error in the github verification process.',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: 'This is what happened',
          value: `${errorMessage}`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function honeyAddy() {
  return {
    embed: {
      title: '$HNY Token 🍯',
      color: 16769024,
      fields: [
        {
          name: 'Address',
          value: '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9',
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

function honeyPriceEmbed(honeyPrice) {
  return {
    embed: {
      title: '$HNY',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: 'Price 💰',
          value: `$${honeyPrice}`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'info.honeyswap.org',
      },
    },
  }
}

function honeyMetricsEmbed(honeyFactoryLiquidity, honeyFactoryVolume, honeyFactoryFees) {
  return {
    embed: {
      title: 'Metrics',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      color: 16769024,
      fields: [
        {
          name: 'Total Liquidity 💰',
          value: `$${honeyFactoryLiquidity}`,
        },
        {
          name: 'Total Volume (24h)',
          value: `$${honeyFactoryVolume}`,
        },
        {
          name: 'Total Fees (24h)',
          value: `$${honeyFactoryFees}`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'info.honeyswap.org',
      },
    },
  }
}

function xDaiInfoEmbed() {
  return {
    embed: {
      title: 'xDai network',
      thumbnail: {
        url: 'https://miro.medium.com/max/400/1*evbI9uxxj2OkBaWNpWcssw.png',
      },
      color: 16769024,
      fields: [
        {
          name: 'Network Name:',
          value: `xDai`,
        },
        {
          name: 'New RPC URL:',
          value: `https://rpc.xdaichain.com/`,
        },
        {
          name: 'ChainID:',
          value: `100`,
        },
        {
          name: 'Symbol:',
          value: `xDai`,
        },
        {
          name: 'Block Explorer URL:',
          value: `https://blockscout.com/poa/xdai`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'info.honeyswap.org',
      },
    },
  }
}

function officialAccountsEmbed() {
  return {
    embed: {
      title: 'Official accounts',
      thumbnail: {
        url: 'https://audiologydesign.com/wp-content/uploads/2017/05/header-social.jpg',
      },
      color: 16769024,
      fields: [
        {
          name: 'Reddit',
          value: `http://reddit.com/r/HNY `,
        },
        {
          name: 'Twitter',
          value: `https://twitter.com/Honeyswap`,
        },
        {
          name: 'Telegram',
          value: `https://t.me/honeyswapofficial`,
        },
        {
          name: 'Youtube',
          value: `https://www.youtube.com/channel/UCDgC-6bMv9YxJZJGuItr3NQ`,

        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'info.honeyswap.org',
      },
    },
  }
}

function credEmbed(totalCred, length, cred) {
  return {
    embed: {
      color: 16769024,
      title: 'Your cred:',
      thumbnail: {
        url: 'https://i.imgur.com/dRxtULu.png',
      },
      fields: [
        {
          name: 'Total',
          value: Math.round(totalCred),
        },
        {
          name: 'Last week',
          value: Math.round(cred[length - 1]),
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'about.1hive.org',
      },
    },
  }
}

module.exports = {
  welcomeEmbed,
  brightidWarningEmbed,
  wrongChannelWarningEmbed,
  walletWarningEmbed,
  helpEmbed,
  pollenEmbed,
  brightidEmbed,
  officialAccountsEmbed,
  honeyAddy,
  honeyMetricsEmbed,
  honeyPriceEmbed,
  credEmbed,
  verifyDiscourseEmbed,
  successDiscourseVerificationEmbed,
  errorDiscourseVerificationEmbed,
  verifyGithubEmbed,
  successGithubVerificationEmbed,
  errorGithubVerificationEmbed,
  xDaiInfoEmbed,
  helpEmbedES
}
