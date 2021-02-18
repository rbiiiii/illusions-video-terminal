import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        videosList: [{
                source: 'Cognitive_Flashs_fr',
                title: "fr"
            },
            {
                source: 'Cognitive_Flashs_nl',
                title: "nl"
            },
            {
                source: 'Cognitive_Flashs_de',
                title: "de"
            },
            {
                source: 'Cognitive_Flashs_en',
                title: "en"
            },
            {
                source: 'Cognitive_gorille_fr',
                title: "fr"
            },
            {
                source: 'Cognitive_gorille_nl',
                title: "nl"
            },
            {
                source: 'Cognitive_gorille_de',
                title: "de"
            },
            {
                source: 'Cognitive_gorille_en',
                title: "en"
            },
            {
                source: 'Cognitive_Koulechov_fr',
                title: "fr"
            },
            {
                source: 'Cognitive_Koulechov_nl',
                title: "nl"
            },
            {
                source: 'Cognitive_Koulechov_de',
                title: "de"
            },
            {
                source: 'Cognitive_Koulechov_en',
                title: "en"
            },
            {
                source: 'Cognitive_Train_fr',
                title: "fr"
            },
            {
                source: 'Cognitive_Train_nl',
                title: "nl"
            },
            {
                source: 'Cognitive_Train_de',
                title: "de"
            },
            {
                source: 'Cognitive_Train_en',
                title: "en"
            },
            {
                source: 'Cognitives_Ballerine_fr',
                title: "fr"
            },
            {
                source: 'Cognitives_Ballerine_nl',
                title: "nl"
            },
            {
                source: 'Cognitives_Ballerine_de',
                title: "de"
            },
            {
                source: 'Cognitives_Ballerine_en',
                title: "en"
            },
            {
                source: 'Cognitives_Pointscouleur_fr',
                title: "fr"
            },
            {
                source: 'Cognitives_Pointscouleur_nl',
                title: "nl"
            },
            {
                source: 'Cognitives_Pointscouleur_de',
                title: "de"
            },
            {
                source: 'Cognitives_Pointscouleur_en',
                title: "en"
            }
        ]
    }
});

export default app;