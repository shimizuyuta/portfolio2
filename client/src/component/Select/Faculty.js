import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Faculty = () => {
  const [state, setState] = React.useState({
    faculty: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    console.log('event',event.target)
    console.log('event value',event.target.value)
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  console.log(state,'state')
  };
  return (
  <FormControl variant="outlined" fullWidth>
    <Select
      native
      value={state.faculty}
      onChange={handleChange}
      inputProps={{
        name: 'faculty',
        id: 'outlined-faculty-native-simple',
      }}
    >
      <option value={0}>-</option>
      <option value={1}>文学系</option>
      <option value={2}>外国語学系</option>
      <option value={3}>法学・政治学系</option>
      <option value={4}>経済学系</option>
      <option value={5}>商学・経営学系</option>
      <option value={6}>社会学系</option>
      <option value={7}>福祉系</option>
      <option value={8}>国際系</option>
      <option value={9}>家政系</option>
      <option value={10}>芸術系</option>
      <option value={11}>音楽系</option>
      <option value={12}>教育系</option>
      <option value={13}>体育系</option>
      <option value={14}>総合系（文系）</option>
      <option value={15}>情報系（文系）</option>
      <option value={16}>環境系（文系）</option>
      <option value={17}>その他文系</option>
      <option value={18}>理工系</option>
      <option value={19}>情報系（理系）</option>
      <option value={20}>建築系</option>
      <option value={21}>土木系</option>
      <option value={22}>数学系</option>
      <option value={23}>物理系</option>
      <option value={24}>化学・物質系</option>
      <option value={25}>機械系</option>
      <option value={26}>電気系</option>
      <option value={27}>電子系</option>
      <option value={28}>金属・材料系</option>
      <option value={29}>生物系</option>
      <option value={30}>環境系（理系）</option>
      <option value={31}>農学・獣医・水産系</option>
      <option value={32}>栄養学系</option>
      <option value={33}>医学・歯学系</option>
      <option value={34}>薬学系</option>
      <option value={35}>看護・医療・保健系</option>
      <option value={36}>その他理系</option>
    </Select>
  </FormControl>
  )
}

export default Faculty



