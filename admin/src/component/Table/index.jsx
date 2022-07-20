import { useEffect, useState } from "react";

const Table = (props) => {
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData ? props.bodyData.length / Number(props.limit): 0);
    pages = props.bodyData ? props.bodyData.length % Number(props.limit) === 0 ? page : page + 1 : 0;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setDataShow(props.bodyData.slice(start, end));

    setCurrPage(page);
  };

  useEffect(() => {
    setDataShow(initDataShow)
  }, [props])
  return (
    <div>
      <div className="table-wrapper">
        <table className={props.className || ""}>
          {props.headData && props.renderHead && props.bodyData?.length > 0 ? (
            <thead>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : <tbody><tr style={{textAlign: 'center'}}><td>Không có dữ liệu</td></tr></tbody>}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {dataShow?.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {pages > 1 ? (
        <div className="table__pagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item ${
                currPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
