const TezosTestData = {

    TokenCreator: {
        TokenName: "My token name",
        TokenDescription: "My Token Descriptions",
        TC02TokenDescription: "",
        SupplyToken: "100",
        Decimals: "18",
        Symbol: "#",
        Icon: "Picture.PNG",
        WalletAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Amount: "100",
        TC02Amount:"10",
        ErrorText2: "Total Supply not fully allocated",
    },

    DAOCreate: {
        DAOName: "My Test DAO",
        TokenAddress: "KT1FZiY1zuGqD5k1EMk1ijBUsFasJRN9QSqZ",
        TokenID: "0",
        GuardianAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Description: "A DAO focused on funding and promoting open-source projects related to sustainability and renewable energy.",
        TC04DAODescription: "",
        VotingDays: '00',
        VotingHours: '01',
        VotingMinutes: "00",
        ExecutionDays: "00",
        ExecutionHours: "00",
        ExecutionMinutes: "01",
        ThresholdExpiryDays: "01",
        ThresholdExpiryHours: "01",
        ThresholdExpiryMinutes: "00",
        QuorumThreshold: '2',
        QuorumChange: '2',
        MinQuorumAmount: '1',
        QuorumMaxChange: '19',
        MaxQuorumAmount: '90',
        RequiredStake: "10",
        MinAmount: "10",
        MaxAmount: "20",
    },

    DAOConfiguration: {

        ProposalFee: "1",
        ReturnedTokenPercentage: "1",

    },

    ChangeGuardian: {
        WalletAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",

    },

    ChangeDelegate: {
        NewDelegateAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
    },

    TransferToken: {
        RecipientAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Asset: "SRD",
        Amount: "10",
        AgoraPostID: "10",
    },

    TransferNFT: {

    },

    EditRegistry: {
        Key: "Hello",
        Value: "Hi",

    },

    AddLambda: {
        MichelsonCode: ".npm__react-simple-code-editor__textarea",

    },

    RemoveLambda: {
        SearchText: "transfer_proposal",
    },

    ExecuteLambda: {
        SearchText: "transfer_proposal",
        LambdaArgumentsCode: "Write Michelson Code For the Input",
        LambdaParams: "Enter the values for the given params in a JSON/JavaScript Object format."

    },

    VoteOnProposal: {

    },

    ProposalExecutionAndDrop: {
        Execute: "//span[text()='Execute']",
        DropExpired: "//span[text()='Drop Expired']",
    },


    OffChainPoll: {
        ProposalTitle: "Community Governance Upgrades Poll",
        ShortDescription: "This proposal aims to conduct an off-chain poll to gather community input on potential upgrades to the Tezos governance process.",
        ExternalLink: "https://examplelink.com/tezos-gov-upgrades-poll",
        Choice1: "Introduce Liquid Democracy",
        Choice2: "Increase Proposal Exploration Period",
        CreateProposalButton: "button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary']",
        DD: "01",
        HH: "05",
        MM: "00",
    },

    TokenStaking: {
        Amount: "000+-e"
    },

    TokenWithdrawal: {
        Amount: "23456E_+",
    },



}
export { TezosTestData };