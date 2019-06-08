import appLocaleData from 'react-intl/locale-data/en'
import enLocal from './locale/en_US.json'
import enUS from 'antd/lib/locale-provider/en_US'

const en = {
    data: appLocaleData,
    locale: enLocal,
    localeName: 'en',
    antd: enUS
}

export default en