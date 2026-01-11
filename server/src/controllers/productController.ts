import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive', //
        },
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;

    if (price < 0 || stockQuantity < 0) {
       res.status(400).json({ 
        message: "Hatalı Giriş: Fiyat ve Stok miktarı 0'dan küçük olamaz." 
      });
      return;
    }

    if (!productId || !name) {
       res.status(400).json({ message: "Ürün ID ve İsim alanları zorunludur." });
       return;
    }
    // -------------------------------------------------------------

    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const product = await prisma.products.findUnique({
      where: { productId: id },
    });

    if (!product) {
      res.status(404).json({ message: "Ürün bulunamadı." });
      return;
    }
    
    if (product.stockQuantity > 0) {
      res.status(400).json({ 
        message: `İş Kuralı İhlali: Stokta ${product.stockQuantity} adet ürün var. Stok tükenmeden ürün kaydı silinemez.` 
      });
      return;
    }
    // ----------------------------------------

    await prisma.products.delete({
      where: { productId: id },
    });

    res.json({ message: "Ürün başarıyla silindi." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
