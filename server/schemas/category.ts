import { defineField, defineType } from 'sanity'

export default defineType({
    name:"category",
    title:"Category",
    type:"document",
    fields:[
        defineField({
            name:"status",
            title:"Status",
            type:"string"
        })
    ]
})