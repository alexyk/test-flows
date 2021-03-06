import AbstractFlowItem from "../abstract/AbstractFlowItem";
import config from "../config";


class NavigationAction extends AbstractFlowItem {
  constructor(title, flowObject, cacheParamNames, routeName, params) {
    super(title, flowObject, cacheParamNames);

    this.routeName = routeName;
    this.params = params;
    this.extraTitle = ` to '${routeName}'`;
  }

  exec() {
    let { routeName, params, flowObject } = this;

    if (typeof(params) == "function") {
      params = params();
    }

    config.navigationService.navigate(routeName, params);
    flowObject.next();
    
    return this;
  }
}

export default NavigationAction;