<template>
    <div id="vcomments"></div>
</template>

<script>
    export default {
        name: 'Valine',
        mounted: function(){
            // require window
            const Valine = require('valine');
            if (typeof window !== 'undefined') {
                this.window = window
                window.AV = require('leancloud-storage')

            }

            new Valine({
                el: '#vcomments' ,
                appId: '09bz3nxQWzyeEHxCPbbpEzWO-gzGzoHsz',// your appId
                appKey: 'hcWp3gAnd8mNQYHSQ2Iw2nfI', // your appKey
                notify:false,
                verify:false,
                avatar:'mm',
                placeholder: '',
                pageSize:3
            });
        },
    }
</script>