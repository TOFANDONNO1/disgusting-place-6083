import { Tr, Td, Text, IconButton, useColorModeValue } from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const ProductRow = (productData) => {
  const navigate = useNavigate();
  return (
    <Tr key={productData._id} h="50px">
      <Td>
        <Text>{productData.name}</Text>
      </Td>
      <Td>
        <Text>{productData._id}</Text>
      </Td>
      <Td>
        <Text>{productData.mrp}</Text>
      </Td>
      <Td>
        <Text>{productData.price}</Text>
      </Td>
      <Td>
        <Text>{productData.brand}</Text>
      </Td>
      <Td>
        <Text>{productData.rating}</Text>
      </Td>

      <Td>
        <IconButton
          onClick={() => navigate(`/admin/products/edit/${productData._id}`)}
          border={"1px solid teal"}
          color={"teal"}
          _hover={{
            backgroundColor: "teal",
            color: "white",
          }}
          aria-label="edit product"
          size="sm"
          icon={<BiEdit />}
        />
      </Td>
      <Td>
        <IconButton
          //   onClick={() => handleDelete(prod.id)}
          border={"1px solid red"}
          color={"red"}
          _hover={{
            backgroundColor: "red",
            color: "white",
          }}
          aria-label="delete product"
          size="sm"
          icon={<RiDeleteBin5Fill />}
        />
      </Td>
    </Tr>
  );
};
