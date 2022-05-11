import { Button } from '@erxes/ui/src/components';
import { __ } from '@erxes/ui/src/utils/core';
import React, { useState, useEffect } from 'react';
import { ObjectListItemContainer } from '../styles';
import ObjectListItem from './ObjectListItem';

type Props = {
  keys: string[];
  value: any[];
  onChange: (value: any[]) => void;
};

export default function ObjectList(props: Props) {
  const { value, keys, onChange } = props;

  const [isEditing, setEditing] = useState(false);
  const [objects, setObjects] = useState(value);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    setObjects(value);
  }, [value, currentIndex, setCurrentIndex]);

  const onChangeValue = (index: number, key: string, value: any) => {
    const newObjects = [...objects];
    newObjects[index][key] = value;

    setObjects(newObjects);
    onChange(objects);
  };

  const onEdit = (index: number) => {
    setCurrentIndex(index);
    setEditing(true);
  };

  const onClickCancel = () => {
    setEditing(false);
  };

  const onClickRemove = () => {
    setEditing(false);

    objects.splice(currentIndex, 1);

    setObjects(objects);
    onChange(objects);
  };

  const renderButtons = (index: number) => {
    if (!isEditing || index !== currentIndex) {
      return null;
    }

    return (
      <>
        <Button
          btnStyle="simple"
          type="button"
          onClick={onClickCancel}
          icon="times-circle"
        >
          Discard
        </Button>
        <Button
          btnStyle="danger"
          type="button"
          onClick={onClickRemove}
          icon="minus-circle"
        >
          Remove
        </Button>
      </>
    );
  };

  return (
    <>
      {(objects || []).map((object, index) => (
        <ObjectListItemContainer>
          <ObjectListItem
            index={index}
            keys={keys}
            object={object}
            onEdit={onEdit}
            onChange={onChangeValue}
          />
          {renderButtons(index)}
        </ObjectListItemContainer>
      ))}
    </>
  );
}
