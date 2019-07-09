import React from 'react';

interface IState {
  playOrPause?: string;
  secondOption?: number;
}

const EventSearchContext = React.createContext({} as IState);

export const EventSearchConsumer = EventSearchContext.Consumer;

export class EventSearchProvider extends React.Component<{}, IState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      // payload: [], // meteorite data from axios call
      playOrPause: 'whatever',
      secondOption: 0
    };
  }

  componentDidMount() {
  }

  // updatePayload = (data) => {
  //   this.setState({ payload: data });
  // };

  render() {
    const { children } = this.props;
    return (
      <EventSearchContext.Provider
        value={{
          ...this.state,
          //updatePayload: updatePayload
        }}
      >
        {children}
      </EventSearchContext.Provider>
    );
  }
}
