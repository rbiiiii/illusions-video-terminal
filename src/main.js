import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        videosList: [{
                source: 'Visuelle_DoubleAxis_fr',
                title: "fr"
            },
            {
                source: 'Visuelle_DoubleAxis_nl',
                title: "nl"
            },
            {
                source: 'Visuelle_DoubleAxis_de',
                title: "de"
            },
            {
                source: 'Visuelle_DoubleAxis_en',
                title: "en"
            },
            {
                source: 'Visuelles_Couleursseparees_fr',
                title: "fr"
            },
            {
                source: 'Visuelles_Couleursseparees_nl',
                title: "nl"
            },
            {
                source: 'Visuelles_Couleursseparees_de',
                title: "de"
            },
            {
                source: 'Visuelles_Couleursseparees_en',
                title: "en"
            },
            {
                source: 'Visuelles_Hallucinationsvisuelles_fr',
                title: "fr"
            },
            {
                source: 'Visuelles_Hallucinationsvisuelles_nl',
                title: "nl"
            },
            {
                source: 'Visuelles_Hallucinationsvisuelles_de',
                title: "de"
            },
            {
                source: 'Visuelles_Hallucinationsvisuelles_en',
                title: "en"
            },
            {
                source: 'Visuelles_Imposssible typography_fr',
                title: "fr"
            },
            {
                source: 'Visuelles_Imposssible typography_nl',
                title: "nl"
            },
            {
                source: 'Visuelles_Imposssible typography_de',
                title: "de"
            },
            {
                source: 'Visuelles_Imposssible typography_en',
                title: "en"
            },
            {
                source: 'Visuelles_Masquespleins_fr',
                title: "fr"
            },
            {
                source: 'Visuelles_Masquespleins_nl',
                title: "nl"
            },
            {
                source: 'Visuelles_Masquespleins_de',
                title: "de"
            },
            {
                source: 'Visuelles_Masquespleins_en',
                title: "en"
            },
            {
                source: 'Visuelles_noirblanccouleurs_fr',
                title: "fr"
            },
            {
                source: 'Visuelles_noirblanccouleurs_nl',
                title: "nl"
            },
            {
                source: 'Visuelles_noirblanccouleurs_de',
                title: "de"
            },
            {
                source: 'Visuelles_noirblanccouleurs_en',
                title: "en"
            },
        ]
    }
});

export default app;