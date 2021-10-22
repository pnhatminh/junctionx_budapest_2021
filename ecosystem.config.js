module.exports = {
    apps: [{
        name: 'serve-data-prod',
        script: 'dist/src/main.js',
        cwd: 'dist/',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        }
    }]
};