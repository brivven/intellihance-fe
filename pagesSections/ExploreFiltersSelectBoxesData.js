
export const SelectBoxesData = [

    {
        options:[
            { value: 'newest', label: 'Newest' },
            { value: 'oldest', label: 'Oldest' },
            { value: 'popular', label: 'Most popular' },
            { value: 'alphabetically', label: 'Alphabetically' },
        ],
        placeholder: 'Order By',
        name: 'orderBy',
        queryName: 'orderBy',
    },

    {
        options:[
            { value: 0, label: 'All ratings' },
            { value: 4, label: '4 stars & up' },
            { value: 3, label: '3 stars & up' },
            { value: 2, label: '2 stars & up' },
            { value: 1, label: '1 stars & up' }
        ],
        placeholder: 'Rating',
        name: 'rating',
        queryName: 'rating',
    },
    
]