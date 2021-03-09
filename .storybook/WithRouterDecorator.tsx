import {
    LocationProvider,
    createMemorySource,
    createHistory as createRouterHistory
  } from "@reach/router";
  import React from "react";
  import { makeDecorator } from "@storybook/addons";
  
  let firstHistoryObject:any = null;
  function createHistory(initialPath:any) {
    if (firstHistoryObject) {
      firstHistoryObject.navigate(initialPath);
      return firstHistoryObject;
    }
  
    const source = createMemorySource(initialPath);
    firstHistoryObject = createRouterHistory(source);
    firstHistoryObject.listen(() =>
      console.log("message arrived at router", source.location)
    );
    return firstHistoryObject;
  }
  
  export const withRouter = makeDecorator({
    name: "router",
    parameterName: "router",
    skipIfNoParametersOrOptions: true,
  
    wrapper: (getStory, context, { parameters = "/" }) => {
      return (
        <LocationProvider history={createHistory(parameters)}>
          {getStory(context)}
        </LocationProvider>
      );
    }
  });