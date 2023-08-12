import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';

// Define an interface for the state type
interface MyState {
  count: number;
  name: string;
}

export default class OldClassComponent extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      name: 'kunal',
    };
  }
  render() {
    const incCount = () => {
      this.setState({count: this.state.count + 1, name: 'khanna'});
    };
    return (
      <View>
        <Text>{[this.state.count, this.state.name]}</Text>
        <Button
          title="click this"
          onPress={() => {
            this.setState({count: this.state.count + 1, name: 'kunal'});
          }}
        />
        <OldChildClass
          increamentCount={incCount}
          data={[this.state.count, this.state.name]}
        />
      </View>
    );
  }
}

// Define an interface for the props type
interface OldChildProps {
  increamentCount: () => void;
  data: (string | number)[];
}

class OldChildClass extends Component<OldChildProps> {
  render(): React.ReactNode {
    const [count, name] = this.props.data;
    return (
      <View>
        <Text>{[count, ' ', name]}</Text>
        <Button
          title="click this"
          onPress={() => {
            this.props.increamentCount();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
