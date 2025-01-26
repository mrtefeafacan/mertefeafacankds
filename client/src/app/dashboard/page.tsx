"use client";

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

export default function DashBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Müşteri Ve Giderler"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 Ekim - 18 Aralık 2024"
        details={[
          {
            title: "Müşteri Artışı",
            amount: "175.00",
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
          {
            title: "Giderler",
            amount: "100.00",
            changePercentage: 56,
            IconComponent: TrendingUp,
          },
        ]}
      />
      <StatCard
        title="Toplam Sipariş Ve Bekleyen Siparişler"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 Ekim - 18 Aralık 2024"
        details={[
          {
            title: "Toplam",
            amount: "250.00",
            changePercentage: -40,
            IconComponent: TrendingDown,
          },
          {
            title: "Bekleyen",
            amount: "147",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Satışlar Ve İndirimler"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 Ekim - 18 Aralık 2024"
        details={[
          {
            title: "Satışlar",
            amount: "1000.00",
            changePercentage: -20,
            IconComponent: TrendingDown,
          },
          {
            title: "İndirimler",
            amount: "200.00",
            changePercentage: 10,
            IconComponent: TrendingUp,
          },
        ]}
      />
    </div>
  );
}
