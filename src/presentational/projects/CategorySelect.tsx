import { FunctionComponent } from 'react';

import { categories } from 'src/domain/projects/constant';
import { Category } from 'src/domain/projects/entity';
import { Flex } from '../components/common';
import { mainStiches } from '../themes';

type CategorySelectProps = {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
};

const CategorySelect: FunctionComponent<CategorySelectProps> = (props) => {
  return (
    <Container>
      Category
      <Select
        value={props.selectedCategory}
        onChange={(e) => props.onSelectCategory(e.target.value as Category)}>
        {categories.map((cat) => (
          <Option key={cat} value={cat}>
            {cat}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default CategorySelect;

const Container = mainStiches.styled(Flex, {
  position: 'sticky',
  top: '60px',
  backgroundColor: 'rgba(255,255,255,0.9)',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
});

const Select = mainStiches.styled('select', {
  padding: '10px',
  borderRadius: '10px',
});

const Option = mainStiches.styled('option', {});
