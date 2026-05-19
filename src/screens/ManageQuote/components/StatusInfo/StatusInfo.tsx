import { View } from "react-native";

import TagIcon from "../../../../assets/icons/tag.svg";
import { QuoteSection, Radio, Status } from "../../../../components";
import { useQuote } from "../../../../hooks/useQuote";

import { styles } from "./styles";

export function StatusInfo() {
  const { quote, setStatus } = useQuote();

  const renderBody = () => {
    return (
      <View style={styles.container}>
        <View style={styles.verticalContainer}>
          <Radio
            label={<Status status="approved" />}
            value="approved"
            checked={quote.status === "approved"}
            onPress={setStatus}
          />
          <Radio
            label={<Status status="sent" />}
            value="sent"
            checked={quote.status === "sent"}
            onPress={setStatus}
          />
        </View>

        <View style={styles.verticalContainer}>
          <Radio
            label={<Status status="draft" />}
            value="draft"
            checked={quote.status === "draft"}
            onPress={setStatus}
          />
          <Radio
            label={<Status status="declined" />}
            value="declined"
            checked={quote.status === "declined"}
            onPress={setStatus}
          />
        </View>
      </View>
    );
  };
  return <QuoteSection title="Status" icon={TagIcon} renderBody={renderBody} />;
}
