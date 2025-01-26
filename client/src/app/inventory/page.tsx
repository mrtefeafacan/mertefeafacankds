"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "../(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Ürün İsmi", width: 200 },
  {
    field: "price",
    headerName: "Fiyat",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `₺${row.price}`,
  },
  {
    field: "rating",
    headerName: "Derece",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stok miktari",
    width: 150,
    type: "number",
  },
];

function Inventory() {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading ...</div>;
  }
  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Ürünler getirilirken bir hata oluştu.
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Envanter" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
}

export default Inventory;
