import React from "react";
import axios from "axios";

const getData = async () => {
    try {
      const result = await axios("http://localhost:4000/dummy");
      console.log("TEST DATA", result);
    } catch (error) {
      setError("There is an error in rendering test data.");
    }
};
function DummyPage() {

return (<h3> This is a dummy page </h3>);
}

export default DummyPage;