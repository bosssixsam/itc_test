import React, { useEffect, useState } from "react";

import axiosClient from "@/services/axiosClients";

import { ItemView } from "@/modules/home";

export interface IItem {
  name: string;
  url: string;
}

const ItemContainer = ({ name, url }: IItem) => {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    handleItem();
  }, []);

  const handleItem = async () => {
    setLoading(true);
    try {
      const result: any = await axiosClient.get(url);
      if (result) {
        setLoading(false);
        setImg(result.sprites.other["official-artwork"].front_default);
      }
    } catch (error) {
      setLoading(false);
      return "";
    }
  };

  return <ItemView className="max-w-[80px]" loading={loading} name={name} img={img} />;
};

export default ItemContainer;
