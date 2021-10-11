import { FlexContent } from 'modules/boards/styles/item';
import Select from 'react-select-plus';
import { LANGUAGES } from 'modules/settings/general/constants';
import SelectBrand from 'modules/settings/integrations/containers/SelectBrand';
import { LeftItem } from 'modules/common/components/step/styles';
import {
  ControlLabel,
  FormControl,
  FormGroup
} from 'modules/common/components/form';
import { FlexItem } from 'modules/layout/styles';
import { FlexItem as FlexItemContainer } from './style';
import React from 'react';
import { Description } from 'modules/settings/styles';
import SelectChannels from 'modules/settings/integrations/containers/SelectChannels';
// import SelectForm from 'modules/bookings/containers/SelectForm';

type Name = 'languageCode' | 'formId';

type Props = {
  onChange: (name: string, value: any) => void;
  title: string;
  brandId: string;
  channelIds: string[];
  languageCode: string;
  formId: string;
  buttonText: string;
};

function ChooseSettings({
  onChange,
  title,
  brandId,
  channelIds,
  languageCode,
  formId,
  buttonText
}: Props) {
  const onChangeSelect = (key: Name, e: any) => {
    let value = e;

    if (e && e.value) {
      value = e.value;
    }
    onChange(key, value);
  };

  return (
    <FlexItemContainer>
      <LeftItem>
        <FormGroup>
          <ControlLabel required={true}>Booking Title</ControlLabel>
          <Description>
            Name this widget to differentiate from the rest internally.
          </Description>
          <FormControl
            type="text"
            onChange={(e: any) => onChange('title', e.target.value)}
            defaultValue={title}
          />
        </FormGroup>

        <FormGroup>
          <SelectBrand
            required={true}
            defaultValue={brandId}
            onChange={(e: any) => onChange('brandId', e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <SelectChannels
            defaultValue={channelIds}
            onChange={e => onChange('channelIds', e)}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel required={true}>Language</ControlLabel>
          <Select
            placeholder="Choose language"
            options={LANGUAGES.map(el => ({
              label: el.label,
              value: el.value
            }))}
            value={languageCode}
            onChange={e => onChangeSelect('languageCode', e)}
          />
        </FormGroup>

        <FlexContent>
          {/* <FlexItem>
            <FormGroup>
              <ControlLabel required={true}>Form to display</ControlLabel>
              <SelectForm
                value={formId}
                onChange={e => onChangeSelect('formId', e)}
                placeholder="Choose a form"
              />
            </FormGroup>
          </FlexItem> */}
          <FlexItem hasSpace={true}>
            <FormGroup>
              <ControlLabel required={true}>Form Button Text</ControlLabel>
              <FormControl
                placeholder="Button text"
                type="text"
                defaultValue={buttonText}
                onChange={(e: any) => onChange('buttonText', e.target.value)}
              />
            </FormGroup>
          </FlexItem>
        </FlexContent>
      </LeftItem>
    </FlexItemContainer>
  );
}

export default ChooseSettings;