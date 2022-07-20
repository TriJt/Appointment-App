import React, { Children } from 'react'
import Select from 'react-select'
import classnames from 'classnames'



export default function Inputs(props) {

    return (
        <div
            className={classnames(
                'inputs',
                `bg-${props.bgcolor || 'white'}`,
                `color-${props.color || 'black'}`,
                `size-${props.size || 'full'}`,
                { radius: props.radius },
                { border: props.border })}
            style={props.style}
        >
            {props.label ? <label>{props.label}</label> : ''}
            {
                (props.type == 'text' || props.type == 'number') && <input
                    id={props.id}
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                />
            }

            {
                props.type == 'select' && <Select
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    options={props.options}
                    defaultValue={props.defaultValue}
                    styles={{
                        control: (styled) => ({
                            ...styled,
                            height: '100%',
                            background: 'transparent',
                            color: 'inherit',
                            border: '1px solid black'
                        }),
                        container: (styled) => ({
                            ...styled,
                            height: '100%',
                            background: 'transparent',
                            color: 'inherit',
                        }),
                        placeholder: (styled) => ({
                            ...styled,
                            color: 'inherit',

                        }),
                        indicatorSeparator: (styled) => ({
                            ...styled,
                            background: 'inherit',

                        }),
                        dropdownIndicator: () => ({
                            display: 'none'
                        })
                    }}
                />
            }
            {
                props.type == 'date' && <input
                    type='date'
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    max={props.max}
                    min={props.min}
                />
            }
            {
                props.type == 'color' && <input
                    type='color'
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                />
            }
            {
                props.type == 'checkbox' && <input
                    type='checkbox'
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                />
            }
            {
                props.type == 'textarea' && <textarea
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                >
                    {Children}
                </textarea>
            }
            {
                props.type == 'switch' && <div className='switch'>
                    <input type="checkbox" />
                    <span className="slider"></span>
                </div>
            }
            {
                props.type == 'file' && <input
                    type="file"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange} />
            }

            {props.icon ? props.icon : ''}
            {props.error ? <p>{props.error}</p> : ''}

        </div>
    )
}
