import React from 'react';
import './json.less'
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper, REGEX } from '../../../utils/Utils'

export interface JsonProps extends ComponentProps<HTMLDivElement>{
	json: any
}

/**
 * Json UI component
 */
export const Json: React.FC<JsonProps> = ({ json, ...props }) => {

	function renderJsonObject(object: any, keyPrefix = ""){
        if(!object && object !==0 && object !== false) return <></>
        if(Array.isArray(object)){
            return  <div className="json-array animate__animated animate__fadeIn">
                        {
                            object.map((item, index) => renderJsonObject(item, index.toString()))
                        }
                    </div>
        } else if(typeof object === "number"){
            return <span key={keyPrefix} className="json-number">{object.toString()}</span>
        } else if(typeof object === "boolean"){
            return <span key={keyPrefix} className={ClassNameHelper("json-boolean", {false: !object})}>{object.toString()}</span>
        } else if(typeof object === "string"){
			if(object.match(REGEX.email)) return <span key={keyPrefix} className="json-string email">
													<a className='pizi-link' href={`mailto:${object}`}>{object}</a>
												</span>
			if(object.match(REGEX.url)) return <span key={keyPrefix} className="json-string url">
													<a className='pizi-link' href={object}>{object}</a>
												</span>
			if(object.match(REGEX.phone)) return <span key={keyPrefix} className="json-string phone">
													<a className='pizi-link' href={`phoneto:${object}`}>{object}</a>
												</span>
			if(object.match(REGEX.date)) return <span key={keyPrefix} className="json-string date">{object}</span>
			if(object.match(REGEX.uuid)) return <span key={keyPrefix} className="json-string uuid">{object}</span>
			if(object.match(REGEX.id)) return <span key={keyPrefix} className="json-string id">{object}</span>
            return <span key={keyPrefix} className="json-string">{object}</span>
        } else if(typeof object === "object"){
            return  <div className="json-object" key={keyPrefix}>
                        {
                            Object.keys(object).map((key) =>   <div key={keyPrefix + key} className={"json-object-value" + typeof object[key]}>
                                                                    <span className="json-object-key">{key}:</span>
                                                                    {renderJsonObject(object[key], keyPrefix + key)}
                                                                </div>)
                        }
                    </div>
        }
    }

	return 	<div className={ClassNameHelper("pizi-json")}>
				{renderJsonObject(json)}
	        </div>
}