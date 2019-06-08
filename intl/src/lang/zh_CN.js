import appLocaleData from 'react-intl/locale-data/zh'
import zhLocal from './locale/zh_CN.json'
import zhCN from 'antd/lib/locale-provider/zh_CN'

const zh = {
    data: appLocaleData,
    locale: zhLocal,
    localeName: 'zh',
    antd: zhCN
}

export default zh