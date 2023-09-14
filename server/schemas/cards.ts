import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'cards',
    title: 'Cards',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
        }),
        defineField({
            name:'price',
            title:'Price',
            type:'string',
        }),
        defineField({
            name:'location',
            title:'Location',
            type:'string',
        }),
        defineField({
            name:'bedCount',
            title:'BedCount',
            type:'string',
        }),
        defineField({
            name:'bathCount',
            title:'BathCount',
            type:'string',
        }),
        defineField({
            name:'size',
            title:'Size',
            type:'string',
        }),
        defineField({
            name: 'categories',
            title: 'Status',
            type: 'array',
            of: [{type:"reference",to:[{type:"category"}]}]
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true,
            }
        }),
    ]

})