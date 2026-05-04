import re

with open('App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace heroDesc
old_hero = '  heroDesc: { en: "Combining 7+ years of hands-on warehouse operations with a structured, data-driven approach to inventory management. I build processes that make planning realistic."'
new_hero = '  heroDesc: { en: "I translate operational reality into inventory decisions \u2014 not just theory. With 7+ years running warehouse and supply chain operations, I understand that every replenishment decision is shaped by four forces: Demand signals, Lead Time constraints, Safety Stock logic, and MOQ realities. In this industry, product lifecycle and obsolescence are not afterthoughts \u2014 they are built into how I plan. I balance service level against capital risk, and I build the processes, systems, and supplier relationships that make those decisions stick."'

if old_hero in content:
    content = content.replace(old_hero, new_hero, 1)
    print('SUCCESS: heroDesc (en) replaced')
else:
    print('WARN: heroDesc (en) not found')

# Also replace Chinese portion of heroDesc
old_hero_zh = '\u5c06\u8d85\u8fc7 7 \u5e74\u7684\u4e00\u7ebf\u4ed3\u50a8\u5b9e\u64cd\u7ecf\u9a8c\u4e0e\u7cfb\u7edf\u5316\u3001\u6570\u636e\u9a71\u52a8\u7684\u5e93\u5b58\u7ba1\u7406\u65b9\u6cd5\u76f8\u7ed3\u5408\u3002\u6211\u6784\u5efa\u7684\u6d41\u7a0b\u80fd\u8ba9\u201c\u8ba1\u5212\u201d\u771f\u6b63\u843d\u5730\u3002'
new_hero_zh = '\u6211\u5c06\u4e00\u7ebf\u8fd0\u8425\u5b9e\u611f\u8f6c\u5316\u4e3a\u7cbe\u51c6\u7684\u5e93\u5b58\u51b3\u7b56\u2014\u2014\u4e0d\u53ea\u662f\u7406\u8bba\uff0c\u800c\u662f\u771f\u6b63\u843d\u5730\u7684\u5224\u65ad\u3002\u5728\u8d85\u8fc7 7 \u5e74\u7684\u4ed3\u50a8\u4e0e\u4f9b\u5e94\u94fe\u8fd0\u8425\u7ecf\u5386\u4e2d\uff0c\u6211\u6df1\u523b\u7406\u89e3\u6bcf\u4e00\u4e2a\u8865\u8d27\u51b3\u7b56\u90fd\u7531\u56db\u4e2a\u529b\u91cf\u5171\u540c\u9a71\u52a8\uff1a\u9700\u6c42\u4fe1\u53f7\u3001\u4ea4\u8d27\u5468\u671f\u7ea6\u675f\u3001\u5b89\u5168\u5e93\u5b58\u903b\u8f91\uff0c\u4ee5\u53ca MOQ \u73b0\u5b9e\u3002\u5728\u8fd9\u4e2a\u884c\u4e1a\uff0c\u4ea7\u54c1\u751f\u547d\u5468\u671f\u4e0e\u5471\u6eda\u5e93\u5b58\u98ce\u9669\u4e0d\u662f\u4e8b\u540e\u624d\u60f3\u5230\u7684\u2014\u2014\u5b83\u4eec\u4ece\u4e00\u5f00\u59cb\u5c31\u5d4c\u5165\u5728\u6211\u7684\u8ba1\u5212\u601d\u7ef4\u91cc\u3002\u6211\u5728\u670d\u52a1\u6c34\u5e73\u4e0e\u8d44\u91d1\u98ce\u9669\u4e4b\u95f4\u5bfb\u627e\u5e73\u8861\uff0c\u5e76\u6784\u5efa\u8ba9\u8fd9\u4e9b\u51b3\u7b56\u771f\u6b63\u843d\u5730\u7684\u6d41\u7a0b\u3001\u7cfb\u7edf\u4e0e\u4f9b\u5e94\u5546\u5173\u7cfb\u3002'

if old_hero_zh in content:
    content = content.replace(old_hero_zh, new_hero_zh, 1)
    print('SUCCESS: heroDesc (zh) replaced')
else:
    print('WARN: heroDesc (zh) not found')

# 2. Expand coreDesc to mention lifecycle
old_core = 'Calculating Safety Stock, EOQ, and Reorder Points (ROP) to balance high service levels with minimal working capital tied up.'
new_core = 'Calculating Safety Stock, EOQ, and Reorder Points (ROP) to balance high service levels with minimal working capital. Critically, this includes active lifecycle monitoring \u2014 identifying slow-moving and aging SKUs before they become write-offs.'

if old_core in content:
    content = content.replace(old_core, new_core, 1)
    print('SUCCESS: coreDesc (en) replaced')
else:
    print('WARN: coreDesc (en) not found')

old_core_zh = '\u7cbe\u51c6\u8fd0\u7528\u5b89\u5168\u5e93\u5b58\u3001EOQ \u4e0e\u8ba2\u8d27\u70b9\u6a21\u578b\uff0c\u5728\u4fdd\u969c\u9ad8\u5c65\u7ea6\u7387\u4e0e\u964d\u4f4e\u8d44\u91d1\u5360\u7528\u4e4b\u95f4\u53d6\u5f97\u6781\u81f4\u5e73\u8861\u3002'
new_core_zh = '\u7cbe\u51c6\u8fd0\u7528\u5b89\u5168\u5e93\u5b58\u3001EOQ \u4e0e\u8ba2\u8d27\u70b9\u6a21\u578b\uff0c\u5728\u4fdd\u969c\u9ad8\u5c65\u7ea6\u7387\u4e0e\u964d\u4f4e\u8d44\u91d1\u5360\u7528\u4e4b\u95f4\u53d6\u5f97\u6781\u81f4\u5e73\u8861\u3002\u5c24\u4e3a\u5173\u952e\u7684\u662f\uff0c\u8fd9\u5957\u6a21\u578b\u8fd8\u5185\u5d4c\u4e86\u751f\u547d\u5468\u671f\u76d1\u63a7\u673a\u5236\u2014\u2014\u5728 SKU \u6210\u4e3a\u5471\u6eda\u5e93\u5b58\u4e4b\u524d\u4e3b\u52a8\u8bc6\u522b\u5e76\u4ecb\u5165\u3002'

if old_core_zh in content:
    content = content.replace(old_core_zh, new_core_zh, 1)
    print('SUCCESS: coreDesc (zh) replaced')
else:
    print('WARN: coreDesc (zh) not found')

# 3. Add star3 after star2Result
old_star2 = '  star2Result: { en: "Prevented stockouts during peak seasons while avoiding unnecessary warehousing overflow.", zh: "\u5728\u65fa\u5b63\u6709\u6548\u9632\u6b62\u4e86\u65ad\u8d27\uff0c\u540c\u65f6\u907f\u514d\u4e86\u4e0d\u5fc5\u8981\u7684\u7206\u4ed3\u3002" },'
new_star2_and_3 = '''  star2Result: { en: "Prevented stockouts during peak seasons while avoiding unnecessary warehousing overflow.", zh: "\u5728\u65fa\u5b63\u6709\u6548\u9632\u6b62\u4e86\u65ad\u8d27\uff0c\u540c\u65f6\u907f\u514d\u4e86\u4e0d\u5fc5\u8981\u7684\u7206\u4ed3\u3002" },
  star3Context: { en: "Lifecycle & Obsolescence Risk (The Decision)", zh: "\u4ea7\u54c1\u751f\u547d\u5468\u671f\u4e0e\u5471\u6eda\u98ce\u9669 (\u51b3\u7b56)" },
  star3Action: { en: "As certain product lines entered end-of-life stages, I tracked sell-through velocity and cross-referenced remaining inventory against projected demand. I flagged aging SKUs early, proposed targeted markdowns, and suspended future replenishment orders \u2014 preventing capital from being trapped in non-moving stock.", zh: "\u5f53\u90e8\u5206\u4ea7\u54c1\u7ebf\u8fdb\u5165\u751f\u547d\u5468\u671f\u672b\u671f\uff0c\u6211\u6301\u7eed\u8ffd\u8e2a\u5176\u52a8\u9500\u6d41\u901f\uff0c\u5e76\u5c06\u5269\u4f59\u5e93\u5b58\u4e0e\u9884\u671f\u9700\u6c42\u8fdb\u884c\u6bd4\u5bf9\u3002\u6211\u63d0\u524d\u6807\u8bb0\u8001\u5316 SKU\u3001\u63d0\u51fa\u5b9a\u5411\u4fc3\u9500\u5efa\u8bae\uff0c\u5e76\u6682\u505c\u672a\u6765\u7684\u8865\u8d27\u6307\u4ee4\u2014\u2014\u6709\u6548\u9632\u6b62\u4e86\u8d44\u91d1\u88ab\u9501\u6b7b\u5728\u6ede\u9500\u5546\u54c1\u4e2d\u3002" },
  star3Result: { en: "Reduced write-off exposure by proactively liquidating aging inventory before contractual deadlines, while protecting capacity for high-velocity active SKUs.", zh: "\u901a\u8fc7\u5728\u5408\u540c\u622a\u6b62\u671f\u524d\u4e3b\u52a8\u6e05\u7406\u8001\u5316\u5e93\u5b58\uff0c\u6709\u6548\u964d\u4f4e\u4e86\u6838\u9500\u635f\u5931\uff0c\u540c\u65f6\u4e3a\u9ad8\u52a8\u9500\u73b0\u8d27 SKU \u4fdd\u7559\u4e86\u5145\u8db3\u7684\u4ed3\u50a8\u4e0e\u8d44\u91d1\u7a7a\u95f4\u3002" },'''

if old_star2 in content:
    content = content.replace(old_star2, new_star2_and_3, 1)
    print('SUCCESS: star3 added')
else:
    print('WARN: star2Result not found for star3 insertion')

with open('App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('File written.')
