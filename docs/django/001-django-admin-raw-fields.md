---
title: Django Admin - Performans için raw\_id\_fields Kullanın
date: 2018-12-29 16:20
description: ""
category: Django
tags: ['Django', 'DjangoAdmin']
---

<Title/>

**ForeignKey** kullandığımızda Django Admin bizim için otomatik olarak seçim listesi hazırlar. Özellikle **User** seçimi için bu baş ağrıtıcı bir durum olabiliyor. Django Admin bizim birçok sorunumuzu çözse bile birkaç düzenleme yapmamız gerekebilir. Bunlardan en önemlisi **ForeingKey** ile gelen ve performansı azaltan alanlar için **raw_id_fields** kullanımıdır.

```python
class ArticleAdmin(admin.ModelAdmin):
    raw_id_fields = ("newspaper", "user",)
```

![Django Admin raw_fields](../img/django_raw_id_fields.png)
