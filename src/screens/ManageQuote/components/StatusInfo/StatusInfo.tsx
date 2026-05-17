import { View } from "react-native";

import TagIcon from "../../../../assets/icons/tag.svg";
import {
  QuoteSection,
  QuoteStatus,
  Radio,
  Status,
} from "../../../../components";

import { styles } from "./styles";

type StatusInfoProps = {
  status: QuoteStatus;
  onChangeStatus: (status: QuoteStatus) => void;
};

export function StatusInfo({ status, onChangeStatus }: StatusInfoProps) {
  const renderBody = () => {
    return (
      <View style={styles.container}>
        <View style={styles.verticalContainer}>
          <Radio
            label={<Status status="approved" />}
            value="approved"
            checked={status === "approved"}
            onPress={onChangeStatus}
          />
          <Radio
            label={<Status status="sent" />}
            value="sent"
            checked={status === "sent"}
            onPress={onChangeStatus}
          />
        </View>

        <View style={styles.verticalContainer}>
          <Radio
            label={<Status status="draft" />}
            value="draft"
            checked={status === "draft"}
            onPress={onChangeStatus}
          />
          <Radio
            label={<Status status="declined" />}
            value="declined"
            checked={status === "declined"}
            onPress={onChangeStatus}
          />
        </View>
      </View>
    );
  };
  return <QuoteSection title="Status" icon={TagIcon} renderBody={renderBody} />;
}
