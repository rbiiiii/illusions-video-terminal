import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        videosList: [{
                source: 'Auditive_AccelerandoRisset_fr',
                title: "FR"
            },
            {
                source: 'Auditive_Doppler_fr',
                title: "FR"
            },
            {
                source: 'Auditive_EffetMcGurk_fr',
                title: "FR"
            },
            {
                source: 'Auditive_Sheppard_fr',
                title: "FR"
            },
            {
                source: 'Auditive_sons3d_fr',
                title: "FR"
            },
            {
                source: 'Auditives_hallucinationsauditives_fr',
                title: "FR"
            }
        ]
    }
});

export default app;