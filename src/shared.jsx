export const navList = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/product',
    name: '产品中心'
  },
  {
    path: '/honour',
    name: '荣誉资质'
  },
  {
    path: '/introduce',
    name: '公司介绍'
  },
  {
    path: '/contact',
    name: '联系我们'
  },
]

export const canUseDom = typeof window !== 'undefined' && typeof document !== 'undefined'

export const products = [
  {
    id: 0,
    name: '核电产品',
    src: '/product_0.jpeg',
    desc: (
      <>
        <div className="mb-4 font-medium">名称：核二级电动截止阀</div>
        <div className="mb-4">型号：CH2-2〞JW15SR2R-D2KU（YJ）</div>
        <div className="mb-4">主要参数：RIN:SJUSWJ0050-RA</div>
        <div className="mb-4">公称通径：DN50</div>
        <div className="mb-4">公称压力：1500lb</div>
        <div className="mb-4">质保等级：Q1</div>
        <div className="mb-4">RCCP：2级</div>
        <div className="mb-4">抗震类别：1A</div>
        <div className="mb-4">运行温度：120℃</div>
        <div className="mb-4">运行压力：20.5MPa</div>
      </>
    )
  },
  {
    id: 1,
    name: '公司工程阀门',
    src: '/product_1.jpeg',
    desc: (
      <>
        <div>
          <div className="mb-2 text-base font-semibold">本公司水道阀门产品结构优势与特点：</div>
          <div className="mb-4">1、产品设计采购SDRC公司先进的计算机软件I-Deas，对阀门结构造型进行三维设计和有限元分析，使产品结构更趋合理、性能优良。</div>
          <div>2、产品制造采用高精度的数控机床和加工中心进行机械加工，产品的质量得到保证。能与进口装置、设备配用。</div>
        </div>
        <div className="mt-8">
          <div className="mb-2 text-base font-semibold">产品范围：</div>
          <div className="mb-4">类型：闸阀、蝶阀、止回阀、排气阀、控制阀、不锈钢闸板阀</div>
          <div className="mb-4">尺寸：DN15mm-DN800mm</div>
          <div className="mb-4">压力等级：PN0.6MPa-2.5MPa</div>
          <div>主体材料：QT500-7</div>
        </div>
      </>
    )
  },
  {
    id: 2,
    name: '球阀',
    src: '/product_2.jpeg',
    desc: (
      <>
        <div>
          <div className="mb-2 text-base font-semibold">本公司球阀产品结构优势与特点：</div>
          <div className="mb-4">1、产品设计采购SDRC公司先进的计算机软件I-Deas，对阀门结构造型进行三维设计和有限元分析，使产品结构更趋合理、性能优良。</div>
          <div>2、产品制造采用高精度的数控机床和加工中心进行机械加工，产品的质量得到保证。能与进口装置、设备配用。</div>
          <div>3、球阀系列产品严格按照API、ASME标准进行设计、制造、检验和试验，阀门达到微泄露要求。</div>
          <div>4、阀门启闭时间相对较短，球体旋转90°即完成全开或全关要求。由初始预紧比压保证低压密封，由内压自动实现高压密封，密封性能好，使用寿命长，且介质流动方向不受限制。</div>
        </div>
        <div className="mt-8">
          <div className="mb-2 text-base font-semibold">产品范围：</div>
          <div className="mb-4">类型：三片式锻钢软密封固定式球阀，锻钢软密封浮动式球阀，两片式铸钢固定式球阀，两片式铸钢软密封浮动式球阀，双活塞效应软密封球阀，全焊接球阀，硬密封球阀</div>
          <div className="mb-4">尺寸：1/2～56</div>
          <div className="mb-4">压力等级：150LB--2500LB</div>
          <div>压力等级：150LB--2500LB</div>
        </div>
      </>
    )
  },
  {
    id: 3,
    name: '止回阀',
    src: '/product_3.jpeg',
    desc: (
      <>
        <div>
          <div className="mb-2 text-base font-semibold">本公司止回阀产品结构优势与特点：</div>
          <div className="mb-4">1、产品设计采购SDRC公司先进的计算机软件I-Deas，对阀门结构造型进行三维设计和有限元分析，使产品结构更趋合理、性能优良。</div>
          <div>2、产品制造采用高精度的数控机床和加工中心进行机械加工，产品的质量得到保证。能与进口装置、设备配用。</div>
          <div>3、止回阀系列产品严格按照API、ASME标准进行设计、制造、检验和试验，高位高压阀门进行热态试验、阀门达到微泄露要求。</div>
          <div>4、止回阀的启闭件靠介质流动和力量自行开启或关闭，以防止介质倒流。属于自动阀类，主要用于介质单向流动的管道上，只允许介质向一个方向流动，以防止发生事故。</div>
        </div>
        <div className="mt-8">
          <div className="mb-2 text-base font-semibold">产品范围：</div>
          <div className="mb-4">类型：旋启式止回阀、升降式止回阀、斜瓣式止回阀、轴流式止回阀</div>
          <div className="mb-4">尺寸：1/2～36</div>
          <div className="mb-4">压力等级：150LB--2500LB</div>
          <div>主体材料：按API600</div>
        </div>
      </>
    )
  },
  {
    id: 4,
    name: '截止阀',
    src: '/product_4.jpeg',
    desc: (
      <>
        <div>
          <div className="mb-2 text-base font-semibold">本公司截止阀产品结构优势与特点：</div>
          <div className="mb-4">1、产品设计采购SDRC公司先进的计算机软件I-Deas，对阀门结构造型进行三维设计和有限元分析，使产品结构更趋合理、性能优良。</div>
          <div>2、产品制造采用高精度的数控机床和加工中心进行机械加工，产品的质量得到保证。能与进口装置、设备配用。</div>
          <div>3、截止阀系列产品严格按照API、ASME标准进行设计、制造、检验和试验，高位高压阀门进行热态试验、阀门达到微泄露要求。</div>
          <div>4、阀门的阀杆开启或关闭行程相对较短，具有非常可靠的切断功能，阀座通口的变化与阀瓣的行程成正比例关系，非常适合于对流量的调节。非常适合作为切断或调节以及节流用。</div>
        </div>
        <div className="mt-8">
          <div className="mb-2 text-base font-semibold">产品范围：</div>
          <div className="mb-4">类型：T型截止阀、Y型截止阀、截止止回阀、Y型截止止回阀、角式截止阀</div>
          <div className="mb-4">尺寸：1/2～20”</div>
          <div className="mb-4">压力等级：150LB--2500LB</div>
          <div>主体材料：按API600</div>
        </div>
      </>
    )
  },
  {
    id: 5,
    name: '闸阀',
    src: '/product_5.jpeg',
    desc: (
      <>
        <div>
          <div className="mb-2 text-base font-semibold">本公司闸阀产品结构优势与特点：</div>
          <div className="mb-4">1、产品设计采购SDRC公司先进的计算机软件I-Deas，对阀门结构造型进行三维设计和有限元分析，使产品结构更趋合理、性能优良。</div>
          <div>2、产品制造采用高精度的数控机床和加工中心进行机械加工，产品的质量得到保证。能与进口装置、设备配用。</div>
          <div>3、 闸阀系列产品严格按照API、ASME标准进行设计、制造、检验和试验，高位高压阀门进行热态试验、阀门达到微泄露要求。</div>
          <div>4、 密封性能好，使用寿命长，介质流动方向不受限制。</div>
        </div>
        <div className="mt-8">
          <div className="mb-2 text-base font-semibold">产品范围：</div>
          <div className="mb-4">类型：楔式闸阀、平板闸阀、平行双闸板闸阀、暗杆闸阀</div>
          <div className="mb-4">尺寸：1/2～60”</div>
          <div className="mb-4">压力等级：150LB--2500LB</div>
          <div>主体材料：按API600</div>
        </div>
      </>
    )
  },
]
