import { useState } from "react";
import { TreeSelect } from "antd";

import { ICategoryProduct } from "../../../../interface";

type SelectProductProps = {
  categories: ICategoryProduct[] | undefined;
};

const { SHOW_PARENT } = TreeSelect;



const SelectProduct = ({ categories }: SelectProductProps) => {
  const [value, setValue] = useState<string[]>([]);

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const tProps = {
    value,
   
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Vui lòng chọn",
    style: {
      width: "100%",
    },
  };

  return (
    <>
      <TreeSelect {...tProps} />
    </>
  );
};

export default SelectProduct;
