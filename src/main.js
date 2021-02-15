import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        videosList: [{
                source: 'Visuelle_DoubleAxis_fr',
                title: "FR"
            },
            {
                source: 'Visuelles_Couleursseparees_fr',
                title: "FR"
            },
            {
                source: 'Visuelles_Hallucinationsvisuelles_fr',
                title: "FR"
            },
            {
                source: 'Visuelles_Imposssible typography_fr',
                title: "FR"
            },
            {
                source: 'Visuelles_Masquespleins_fr',
                title: "FR"
            },
            {
                source: 'Visuelles_noirblanccouleurs_fr',
                title: "FR"
            }
        ]
    }
});

export default app;