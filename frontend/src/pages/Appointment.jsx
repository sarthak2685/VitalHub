import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Appointmentt from "../components/Appointmentt";

const Appointment = () => {
  return (
    <>
      <Appointmentt
        title={"Schedule Your Appointment | VitalHub"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;