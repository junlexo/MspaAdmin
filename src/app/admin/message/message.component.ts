import {messageVN} from '../../../message/message.vn';
import {messageEN} from '../../../message/message.en';

export var Message = function getMes() {
	var language = localStorage.getItem("language");
	if(!language || language === "en")
      return messageEN;
    else
      return messageVN;
}
