import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        videosList: [{
                source: 'Cognitive_Flashs_fr',
                title: "FR"
            },
            {
                source: 'Cognitive_gorille_fr',
                title: "FR"
            },
            {
                source: 'Cognitive_Koulechov_fr',
                title: "FR"
            },
            {
                source: 'Cognitive_Train_fr',
                title: "FR"
            },
            {
                source: 'Cognitives_Ballerine_fr',
                title: "FR"
            },
            {
                source: 'Cognitives_Pointscouleur_fr',
                title: "FR"
            }
        ]
    }
});

export default app;