import React from "react";

import useGetOrders from "../../hooks/useGetOrders";
import { IOrder, IOrderResponse, IOrderDetail } from "./types";
import axiosInstance, {
  baseUrlOrderList,
  baseUrlSingleOrder,
} from "../../services/api";

import TextInput from "../../components/TextInput";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Text from "../../components/Text";

import { OrdersWrapper, HorizontalText, ImageOrder } from "./styles";

const Home: React.FC = () => {
  const { orders, loadOrders, isLoading, hasError } = useGetOrders();
  const [limit, setLimit] = React.useState<number>(10);
  const [orderDetail, setOrderDetail] = React.useState<IOrderDetail>();
  const [filteredOrders, setFilteredOrders] = React.useState<IOrder[]>([]);
  const [searchText, setSearchText] = React.useState<string>("");
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState<boolean>(
    false
  );
  const loadOrder = React.useCallback(async (id): Promise<void> => {
    await axiosInstance
      .get(`${baseUrlSingleOrder}/${id}`)
      .then((response) => {
        response.data && setOrderDetail(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  React.useEffect(() => {
    if (!orders.length && !hasError && !isLoading) {
      loadOrders();
    } else if (!filteredOrders.length) {
      setFilteredOrders(orders);
    }
  }, [loadOrders, orders, hasError, isLoading]);

  const excludeColumns = ["id"];

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredOrders(orders);
    else {
      const filteredOrders = orders.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredOrders(filteredOrders);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <Text>Carregando...</Text>;
    }
    if (!isLoading && hasError) {
      return <Text>Erro na requisição, tente novamente mais tarde</Text>;
    }
    if (!isLoading && !hasError && orders.length) {
      return renderList();
    }

    return <Text>Carregando...</Text>;
  };

  const renderList = () => {
    return (
      <>
        {filteredOrders.length > 0 ? (
          filteredOrders.slice(0, limit).map((order) => (
            <Card key={order.id}>
              <HorizontalText>
                <Text textAlign="left">ID:</Text>
                <Text textAlign="right">
                  <a
                    href="#"
                    onClick={() => {
                      loadOrder(order.id);
                      setIsOrderModalOpen(true);
                    }}
                  >
                    {order.id}
                  </a>
                </Text>
              </HorizontalText>
              <HorizontalText>
                <Text textAlign="left">STATUS:</Text>
                <Text textAlign="right">{order.status}</Text>
              </HorizontalText>
              <HorizontalText>
                <Text textAlign="left">VALOR:</Text>
                <Text textAlign="right">{order.total_order}</Text>
              </HorizontalText>
              <HorizontalText>
                <Text textAlign="left">DATA DE ATUALIZAÇÃO:</Text>
                <Text textAlign="right">{order.update_datetime}</Text>
              </HorizontalText>
              <HorizontalText>
                <Text textAlign="left">CARTEIRA DE PAGAMENTO:</Text>
                <Text textAlign="right">{order.wallet_payment_name}</Text>
              </HorizontalText>
            </Card>
          ))
        ) : (
          <Text>Infelizmente não há pedidos.</Text>
        )}
      </>
    );
  };

  const loadMoreOrders = () => {
    setLimit(limit + 10);
  };

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  return (
    <>
      <div>
        <Modal
          isOpen={isOrderModalOpen}
          handleClose={() => setIsOrderModalOpen(false)}
        >
          {orderDetail ? (
            <>
              <HorizontalText>
                <Text textAlign="left">ID:</Text>
                <Text textAlign="right">{orderDetail.product_id}</Text>
              </HorizontalText>
              <HorizontalText>
                <Text textAlign="left">NOME:</Text>
                <Text textAlign="right">{orderDetail.product_name}</Text>
              </HorizontalText>
              <HorizontalText>
                <Text textAlign="left">DESCRIÇÃO:</Text>
                <Text textAlign="right">{orderDetail.product_description}</Text>
              </HorizontalText>
              <ImageOrder src={orderDetail.product_image}></ImageOrder>
            </>
          ) : null}
        </Modal>
        <TextInput
          placeholder="BUSCAR PEDIDO"
          value={searchText}
          handleChange={(value) => handleChange(value)}
        />
        <OrdersWrapper>{renderContent()}</OrdersWrapper>
        <Button
          onClick={() => loadMoreOrders()}
          disabled={limit > filteredOrders.length}
        >
          {filteredOrders.length > limit
            ? `Carregar mais`
            : `Você chegou ao limite`}
        </Button>
      </div>
    </>
  );
};

export default Home;
