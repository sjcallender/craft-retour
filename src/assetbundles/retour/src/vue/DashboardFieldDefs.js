// Field definitions for DashboardTable.vue
export default [
    {
        name: 'redirectSrcUrl',
        sortField: 'redirectSrcUrl',
        title: '404 File Not Found URL',
        titleClass: 'center',
        dataClass: 'center',
        callback: 'urlFormatter'

    },
    {
        name: 'referrerUrl',
        sortField: 'referrerUrl',
        title: 'Last Referrer URL',
        titleClass: 'center',
        dataClass: 'center',
        callback: 'urlFormatter'
    },
    {
        name: 'hitCount',
        sortField: 'hitCount',
        title: 'Hits',
        titleClass: 'text-right',
        dataClass: 'text-right',
    },
    {
        name: 'hitLastTime',
        sortField: 'hitLastTime',
        title: 'Last Hit',
        titleClass: 'center',
        dataClass: 'center',
    },
    {
        name: 'handledByRetour',
        sortField: 'handledByRetour',
        title: 'Handled',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'boolFormatter'
    },
    {
        name: 'addLink',
        sortField: 'addLink',
        title: '',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'addUrlFormatter'
    }
];
