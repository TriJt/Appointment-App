import React, { useState } from "react";
import { Buttons, Helmet } from "../../component";

import {
  Scheduler,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
  AgendaView,
} from "@progress/kendo-react-scheduler";
import { guid } from "@progress/kendo-react-common";

import './style.scss';

export default function Schedule() {
  const meetingRooms = {
    name: "Meeting Room",
    data: [
      {
        text: "Blue room",
        value: 1,
        color: "blue",
      },
      {
        text: "Red room",
        value: 2,
        color: "red",
      },
      {
        text: "Green room",
        value: 3,
        color: "green",
      },
    ],
    field: "RoomID",
    valueField: "value",
    textField: "text",
    colorField: "color",
  };

  const compareById = (matchingItem) => (item) => matchingItem.id === item.id;
  const [data, setData] = useState([]);

  const onDataChange = ({ created, updated, deleted }) => {
    // Add a unique id to each new item
    const newItemsWithIds = created.map((item) => ({
      ...item,
      id: guid(),
    }));

    setData((dataState) =>
      dataState.reduce((acc, item) => {
        // Skip the item if it was deleted
        if (deleted.find(compareById(item))) return acc;
        // Push the updated item or current item
        acc.push(updated.find(compareById(item)) || item);
        return acc;
      }, newItemsWithIds)
    );
  };

  return (
    <Helmet title="Phân hạng khách hàng">
      <div className="classify">
        <div className="classify__header page-header ">
          <h2 className="classify__header--wrapper ">Lịch hẹn</h2>
          <div className="classify__header--a">
            <p className="classify__header--content classify__header--active ">
              Hôm nay
            </p>
            <p className="classify__header--content">Chưa xác nhận</p>
            <p className="classify__header--content">Xác nhận</p>
          </div>
        </div>
        <div className="classify__content page-content">
          <div className="row">
            <div className="col-12">
              <Buttons size="small radius">Thêm lịch</Buttons>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Scheduler
                editable
                data={data}
                onDataChange={onDataChange}
                resources={[meetingRooms]}
              >
                <TimelineView />
                <DayView />
                <WeekView />
                <MonthView />
                <AgendaView />
              </Scheduler>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
