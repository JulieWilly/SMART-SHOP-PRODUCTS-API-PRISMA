import { Router } from 'express'
import {PrismaClient} from '@prisma/client'
import { config } from 'dotenv';

config();


const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    // const allProducts = await prisma.
    try{

        const getAllProducts = await prisma.products.findMany({
            select: {
                id: true,
                productThumbnail: true,
                productTitle: true,
                productDesc :true,
                productCost: true,
                onOffer: true
            }
           
            },
        )
             res.status(200).json({success: true, data: getAllProducts})


    } catch(e) {
        res.status(500).json({ success: false, message: e.message})
    }
})

router.get('/:id',async (req, res) => {
    try{
        const { id } = req.params;

        const getProduct = await  prisma.products.findFirst({
            where : {
                id : id
            },
            select: {
                id:true,
                productThumbnail: true,
                productTitle: true,
                productDesc: true,
                productCost: true, 
                onOffer: true
            }
        })

        if (getProduct == null) {
            res.status(500).json({success: false, message: "Product not found"})
        } else {
            res.status(200).json({success:true, message: " User found successfully.", data: getProduct})

        }

    } catch(e) {
        res.status(500).json({ success:false, message: e.message})
    }
})

router.post("/",async (req, res) => {
    try{

        // get items
        const {productThumbnail, productTitle, productDesc, productCost, onOffer} = req.body;
        const createProduct = await prisma.products.create({
            data: {
                productThumbnail,
                productTitle, 
                productDesc, 
                productCost, 
                onOffer
            }

        })

        res.json(createProduct)
    } catch(e) {
        res.status(500).json({ success: false, message:e.message})
    }
})

router.patch('/:id',async (req, res) => {
    try {
        const productDetails = req.body;
        const productsFields = ['productThumbnail', 'productTitle', 'productDesc', 'productCost', 'onOffer']

        const { id } = req.params;
        let updates = {};

        for (let product in productDetails ) {
            if(productsFields.includes(product)) {
                updates[product] = productDetails[product]
            }
        }

        const updateProducts = await prisma.products.update({
            where: { id : id},
            data: updates
        })

        res.json(updateProducts)
        
    } catch(e) {
        res.status(500).json({ success: false, message: e.message})
    }
})

router.delete('/:id', async (req, res) => {
    try{

        const { id } = req.params;

        const deleteProduct = await prisma.products.delete({
            where: {
                id:id 
            }
        })

        res.status(200).json({success: true, message: "User deleted succesfully.", data: deleteProduct })
    } catch(e) {
        res.status(500).json({ success: false,message: e.message})
    }
})


export default router;

