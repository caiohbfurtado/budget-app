import { useState } from "react";
import { View } from "react-native";

import TagIcon from "../../../../assets/icons/tag.svg";
import {
  QuoteSection,
  QuoteStatus,
  Radio,
  Status,
} from "../../../../components";

import { styles } from "./styles";

export function StatusInfo() {
  const [status, setStatus] = useState<QuoteStatus>("approved");

  const renderBody = () => {
    return (
      <View style={styles.container}>
        <View style={styles.verticalContainer}>
          <Radio
            label={<Status status="approved" />}
            value="approved"
            checked={status === "approved"}
            onPress={setStatus}
          />
          <Radio
            label={<Status status="sent" />}
            value="sent"
            checked={status === "sent"}
            onPress={setStatus}
          />
        </View>

        <View style={styles.verticalContainer}>
          <Radio
            label={<Status status="draft" />}
            value="draft"
            checked={status === "draft"}
            onPress={setStatus}
          />
          <Radio
            label={<Status status="declined" />}
            value="declined"
            checked={status === "declined"}
            onPress={setStatus}
          />
        </View>
      </View>
    );
  };
  return <QuoteSection title="Status" icon={TagIcon} renderBody={renderBody} />;
}
