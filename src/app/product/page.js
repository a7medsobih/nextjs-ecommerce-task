// src/app/product/page.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ProductClient from "./components/ProductClient";
import { getProduct } from "@/services/product.service";
import RatingSummary from "./components/RatingSummary";
import ReviewList from "./components/ReviewList";
import SectionTitle from "@/components/SectionTitle";
import SimilarItemsCarousel from "./components/SimilarItemsCarousel";
import Footer from "@/components/Footer";

export default async function ProductPage() {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     redirect("/login");
    // }

    let data;

    try {
        data = await getProduct();
    } catch (err) {
        console.error(err);
        return <div className="container py-20">Error loading product</div>;
    }

    if (!data) {
        return <div className="container py-20">Product not found</div>;
    }

    const { product, similarProducts } = data;

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative h-[160px] md:h-[200px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/product-hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-bg-main/95" />


                {/* Title */}
                <h1 className="relative z-10 text-2xl md:text-3xl font-semibold text-black">
                    Product Details
                </h1>
            </section>

            <div className="container py-6">
                {/* Breadcrumb */}
                <Breadcrumb />

                {/* Product Section */}
                <ProductClient initialProduct={product} />

                {/* Rating & Reviews */}
                <div className="py-20">
                    <SectionTitle title="Rating & Reviews" />
                    <RatingSummary />
                    <ReviewList />
                </div>

                {/* {Similar Items} */}
                <div className="pb-20">
                    <SectionTitle title="Similar Items" />
                    <SimilarItemsCarousel products={similarProducts} />
                </div>
            </div>

            <Footer />
        </>
    );
}

