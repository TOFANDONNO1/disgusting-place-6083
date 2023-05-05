import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr,
  IconButton,
  Flex,
  Input,
  CloseButton,
  Text,
  Select,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSort } from "react-icons/bi";
import { useState } from "react";
import { ProductRow } from "./ProductRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/adminReducer/action";
const SearchField = ({ field, onSearch }) => {
  const [search, setSearch] = useState(false);
  const [text, setText] = useState("");
  const closeSearch = () => {
    setSearch((state) => !state);
  };
  return (
    <Flex align="center" justify="space-between">
      {search ? (
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="xs"
          placeholder={`Search ${field}`}
        />
      ) : (
        <Text>{field}</Text>
      )}
      <IconButton
        onClick={() => (search ? onSearch(text) : setSearch((state) => !state))}
        bg="transparent"
        aria-label="search"
        size="xs"
        icon={<BiSearchAlt2 />}
      />
      <CloseButton
        size="sm"
        display={search ? "flex" : "none"}
        onClick={() => closeSearch()}
      />
    </Flex>
  );
};
const SortFields = ({ text }) => {
  return (
    <Flex align="center" justify="space-between">
      <Text>{text}</Text>
      <IconButton
        bg="transparent"
        aria-label="search productName"
        size="xs"
        icon={<BiSort />}
      />
    </Flex>
  );
};
export const AllProducts = () => {
  const onSearch = () => {};
  const [category, setCategory] = useState("dress");
  const dispatch = useDispatch();
  const productData = useSelector((store) => {
    return store.adminReducer;
  });
  // console.log(productData);
  useEffect(() => {
    dispatch(getProduct(category));
  }, [category]);
  return (
    <>
      <Flex mb={"10px"}>
        <Spacer />
        <Select
          width={"25%"}
          placeholder="Select Category"
          border={"1px dotted gray"}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="dress">Dress</option>
          <option value="shoes">Shoes</option>
        </Select>
      </Flex>
      <Table size="sm" border={"1px solid red"}>
        <Thead>
          <Tr border={"1px solid red"}>
            <Th>
              <SearchField field={"Name"} onSearch={onSearch} />
            </Th>
            <Th>
              <SearchField field={"ID"} onSearch={onSearch} />
            </Th>
            <Th>
              <SortFields text="MRP ($)" />
            </Th>
            <Th>
              <SortFields text="Price ($)" />
            </Th>
            <Th>
              <SortFields text="Brand" />
            </Th>
            <Th>
              <SortFields text="Rating" />
            </Th>
            <Th>
              <Text>EDIT</Text>
            </Th>
            <Th>
              <Text>DELETE</Text>
            </Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {productData.products.msg?.map((element) => (
            <ProductRow key={element._id} {...element} category={category} />
          ))}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </>
  );
};
