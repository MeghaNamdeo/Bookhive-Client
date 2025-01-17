import React from "react";
import InputArea from "@/components/atom/form/inputArea";
import { Text, Box } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";

const Settings = () => {
  return (
    <div>
      <Text fontWeight="semibold" fontSize={["20px", "25px"]}>
        Security Settings
      </Text>
      <Box my={"1.5em"}>
        <form>
          <InputArea
            bg={"#212121"}
            type="text"
            placeholder="Phone number"
            label="Phone Number"
          />

          <InputArea
            bg={"#212121"}
            type="password"
            placeholder="*********"
            label="Old Password"
          />

          <InputArea
            bg={"#212121"}
            type="password"
            placeholder="*********"
            label="New Password"
          />

          <Box>
            <Buttons radius="8px" w={"100%"} mt={"1em"}>
              Update
            </Buttons>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Settings;
